const jwt = require('jsonwebtoken')

// middleware to validate token (rutas protegidas)
export default class middleware {
  static async checkToken(req, res, next) {
    try {
      const token = req.get('authorization').split(' ')[1];
      if (!token) return res.status(401).json({ error: 'Acceso denegado' })
    
      const verified = jwt.verify(token, process.env.TOKEN_SECRET);
      req.user = verified
      next() // continuamos
    } catch (error) {
      res.status(401).json({ error: 'token no es válido' })
    }
  }
}