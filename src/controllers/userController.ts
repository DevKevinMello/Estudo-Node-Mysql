import {Request, Response} from 'express';

export const nome = (req: Request, res: Response)=>{
    let nome: string = "";
    if(req.query.nome){
        nome = req.query.nome as string;
    }
    res.render('pages/nome', {
        nome
    });
}

export const idade = (req: Request, res: Response)=>{
    console.log("carregou idade");
    res.render('pages/idade');
}

export const idadeResultado = (req: Request, res: Response)=>{
    console.log("carregou idade resultado");
    let mostrarIdade: boolean = false;
    let idade: number = 0;
    if(req.body.ano){
        let anoNasc: number = parseInt(req.body.ano as string);
        let anoAtual: number = new Date().getFullYear();
        idade = anoAtual - anoNasc;
        mostrarIdade = true;
    }
    res.render('pages/idade', {
        idade,
        mostrarIdade
    });
}