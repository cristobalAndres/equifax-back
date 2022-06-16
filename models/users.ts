// Info: https://sequelize.org/master/manual/typescript.html
import { Model, DataTypes } from 'sequelize';
import { sequelize, GenericStatic } from '../config/database';

export interface IUsers extends Model {
  readonly id: number;
  readonly name: string;
  readonly email: string;
  readonly password?: string;
}

const User = sequelize.define("users", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
  password: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING },
  created_at: { type: DataTypes.DATE },
  updated_at: { type: DataTypes.DATE },
  deleted_at: { type: DataTypes.DATE },
}, {
  timestamps: true,
  paranoid: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  deletedAt: 'deleted_at',
}) as GenericStatic<IUsers>;

export default User;
