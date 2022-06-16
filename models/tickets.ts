// Info: https://sequelize.org/master/manual/typescript.html
import { Model, DataTypes } from 'sequelize';
import { sequelize, GenericStatic } from '../config/database';
import Users from './users';

export interface ITickets extends Model {
  readonly id: number;
  readonly title: string;
  readonly description: string;
  readonly status: string;
  readonly user_id: number;
}

const Ticket = sequelize.define("tickets", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING },
  description: { type: DataTypes.STRING },
  status: { type: DataTypes.STRING },
  user_id: {
    type: DataTypes.INTEGER(),
    allowNull: false,
    references: {
      model: {
        tableName: 'users',
      },
      key: 'id'
    }
  },
  created_at: { type: DataTypes.DATE },
  updated_at: { type: DataTypes.DATE },
  deleted_at: { type: DataTypes.DATE },
}, {
  timestamps: false,
  paranoid: true
}) as GenericStatic<ITickets>;

Ticket.belongsTo(Users, {
  foreignKey: 'user_id',
  as: 'users'
});

export default Ticket;