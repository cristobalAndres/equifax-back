import { Router } from 'express';
import AuthController from '../../controllers/auth/auth.controller';

// Rutas
const router = Router();
/**
 * @swagger
 * tags:
 *   - name: Auth
 *     description: Servicio Autenticación
 */

/**
 * @swagger
 * /login:
 *   post:
 *     tags: [Auth]
 *     description: autenticacion
 *     summary: Atenticacion
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *               type: object
 *               required:
 *                 - email
 *                 - password
 *               properties:
 *                 email:
 *                   description: email usuario
 *                   type: string
 *                 password:
 *                   description: password usuario
 *                   type: string
 *     responses:
 *       '200':
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   description: token autenticacion
 *                   type: string
 *                 user:
 *                   description: datos del usuario
 *                   type: object
 *       '400':
 *         description: 'Error'
 *       '403':
 *         description: 'Error datos invalidos / usuario no encontrado'
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   description: USER_BAD
 *                   type: string
 */
router.post(
  '/login',AuthController.login
);

export default router;