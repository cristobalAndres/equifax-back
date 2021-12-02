// Info: https://sequelize.org/master/manual/typescript.html
import { Model, DataTypes } from 'sequelize';
import { sequelize, GenericStatic } from '../config/database';

export interface IStocks extends Model {
  readonly id: number;
  readonly name: string;
}

const Stocks = sequelize.define("stocks", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
  createdAt: { type: DataTypes.DATE },
  updatedAt: { type: DataTypes.DATE },
}, {
  tableName: 'stocks'
}) as GenericStatic<IStocks>;

export default Stocks;
