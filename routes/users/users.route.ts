import { Router } from 'express';
import UsersController from '../../controllers/users/users.controller';

// Rutas
const router = Router();

/**
 * @swagger
 * tags:
 *   - name: Users
 *     description: Servicio usuarios
 */

/**
 * @swagger
 * /users:
 *   get:
 *     tags: [Users]
 *     description: Obtención usuarios
 *     summary: Users
 *     responses:
 *       '200':
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 properties:
 *                   id:
 *                     description: id usuario
 *                     type: number
 *                   name:
 *                     description: nombre usuario
 *                     type: string
 *                   email:
 *                     description: email usuario
 *                     type: string
 *       '400':
 *         description: 'Error'
 */
router.get(
  '/',UsersController.getUsers
);

/**
 * @swagger
 * /users/create:
 *   post:
 *     tags: [Users]
 *     description: Creación de usuario
 *     summary: Users
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *               type: object
 *               required:
 *                 - name
 *                 - email
 *                 - password
 *               properties:
 *                 name:
 *                   description: nombre usuario
 *                   type: string
 *                 email:
 *                   description: email de usuario
 *                   type: string
 *                 password:
 *                   description: password del usuario
 *                   type: string
 *     responses:
 *       '200':
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   description: nombre usuario
 *                   type: string
 *                 email:
 *                   description: email de usuario
 *                   type: string
 *                 id:
 *                   description: id usuario
 *                   type: string
 *       '400':
 *         description: 'Error'
 */
router.post(
  '/create',UsersController.createUser
);

export default router;