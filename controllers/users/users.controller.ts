import { Request, Response } from 'express';
import * as bcrypt from 'bcrypt'; 
import UsersRepository from '../../repositories/users.repository';

export default class UsersController {
  static async getUsers(req: Request, res: Response) {
    const users = await UsersRepository.getUsers()
    return res.json(users);
  }

  static async createUser(req: Request, res: Response) {
    const body = req.body;
    const password = bcrypt.hashSync(body.password, 10);
    body.password = password;
    const users = await UsersRepository.createuser(body)
    return res.json(users);
  }
}