import { createPool } from 'mysql2/promise';
import { Sequelize, BuildOptions, Model } from 'sequelize';

let sequelize: Sequelize;

sequelize = new Sequelize({
  database: process.env.DATABASE,
  dialect: 'mysql',
  host: process.env.HOST,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT || '3306', 10),
  username: process.env.DB_USERNAME,
});

export { sequelize };

// Info: https://sequelize.org/master/manual/typescript.html
// as sequelize.define used in models doesnt 'return' the correct interface,
// with this it is possible to cast it to the desired interface,
// making advantage of typescript type checkings.
type signature<T> = new (values?: object, options?: BuildOptions) => T;
export type GenericStatic<T> = typeof Model & signature<T>;
