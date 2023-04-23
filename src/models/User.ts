import {Model, DataTypes} from 'sequelize';
import {sequelize} from '../instances/mysql';
import { timeStamp } from 'console';

export interface UserInatance extends Model {
    id: number,
    name: string,
    age: number
}

export const User = sequelize.define<UserInatance>("User",{
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING
    },
    ages: {
        type: DataTypes.INTEGER,
        defaultValue: 18
    }
},{
    tableName: 'Users',
    timestamps: false
    //timeStamps ele assume que tem 2 colunas no banco, 
    //data criou e data atualizou o registro
});