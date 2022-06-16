import { Request, Response } from 'express';
import * as bcrypt from 'bcrypt'; 
import UsersRepository from '../../repositories/users.repository';

export default class UsersController {
  static async getUsers(req: Request, res: Response) {
    try {
      const users = await UsersRepository.getUsers();
      return res.json(users);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  static async createUser(req: Request, res: Response) {
    try {
      const body = req.body;
      const password = bcrypt.hashSync(body.password, 10);
      body.password = password;
      const users = await UsersRepository.createuser(body)
      return res.json({
        id: users.id,
        name: users.name,
        email: users.email
      });
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }
}