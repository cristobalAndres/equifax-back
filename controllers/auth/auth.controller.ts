import { Request, Response } from 'express';
import UsersRepository from '../../repositories/users.repository';
import * as bcrypt from 'bcrypt';
const jwt = require('jsonwebtoken');

export default class AuthController {
  static async login(req: Request, res: Response) {
    const email = req.body.email;
    const password = req.body.password;
    try {
      const user = await UsersRepository.finUsers(email);

      if (!user) {
        return res.status(403).json({
          message: 'USER_NOT_EXIST',
        })
      }

      const equals = bcrypt.compareSync(password, user.password);
      if (!equals) {
        return res.status(403).json({
          message: 'USER_BAD',
        });
      }

      const token = jwt.sign({
        name: user.name,
        id: user.id
      }, process.env.TOKEN_SECRET)

      return res.json({
        token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
        }
      })
    } catch (error) {
      console.error('ERROR->USER->LOGIN', error);
      return res.sendStatus(400);
    }
  }
}