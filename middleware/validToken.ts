const jwt = require('jsonwebtoken')

// middleware to validate token (rutas protegidas)
export default class middleware {
  static async checkToken(req, res, next) {
    const token = req.headers.token;
    if (!token) return res.status(401).json({ error: 'Acceso denegado' })
    try {
      const verified = jwt.verify(token, process.env.TOKEN_SECRET)
      req.user = verified
      next() // continuamos
    } catch (error) {
      res.status(400).json({ error: 'token no es válido' })
    }
  }
}