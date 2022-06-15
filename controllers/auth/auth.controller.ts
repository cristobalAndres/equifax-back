import { Request, Response } from 'express';
const jwt = require('jsonwebtoken');

export default class AuthController {
  static async login(req: Request, res: Response) {
    const user = req.body;
    const token = jwt.sign({
      name: user.name,
      id: user._id
    }, process.env.TOKEN_SECRET)

    return res.json({
      token,
      data: { token }
    });
  }
}