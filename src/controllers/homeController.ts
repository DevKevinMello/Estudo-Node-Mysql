import {Request, Response} from 'express';
import {sequelize} from '../instances/mysql'
import {Product} from '../models/Product'

export const home = async (req: Request, res: Response)=>{
    console.log("CARREGOU HOME");
    try {
        await sequelize.authenticate();
        console.log("Conexao estabelecida");
    } catch (error) {
        console.log("Erro conexao com banco: "+error);
    }

    let user = {
        name: 'Kevin',
        age: 18
    }

    let list = Product.getAll();
    let expensiveList = Product.getFromPriceAfter(10);

    res.render('pages/home', {
        user,
        showWelcome: true,
        maiorIdade: user.age >= 18 ? true : false,
        products: list,
        expensiveList,
        lista: [
            'Arrumar a casa',
            'Lavar a louça'
        ]
    });
}