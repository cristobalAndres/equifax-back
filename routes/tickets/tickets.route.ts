import { Router } from 'express';
import TicketsController from '../../controllers/tickets/tickets.controller';

// Rutas
const router = Router();
/**
 * @swagger
 * tags:
 *   - name: Tickets
 *     description: Servicio Tickets
 */

/**
 * @swagger
 * /tickets:
 *   get:
 *     tags: [Tickets]
 *     description: Obtención tickets
 *     summary: Tickets
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
 *                     description: id ticket
 *                     type: number
 *                   title:
 *                     description: titulo ticket
 *                     type: string
 *                   description:
 *                     description: descripción ticket
 *                     type: string
 *                   status:
 *                     description: status ticket
 *                     type: string
 *                   user:
 *                     description: usuario asoaciado
 *                     type: object
 *       '400':
 *         description: 'Error'
 */
router.get(
  '/',TicketsController.getTickets
);

/**
 * @swagger
 * /tickets/create:
 *   post:
 *     tags: [Tickets]
 *     description: Creación de tickets
 *     summary: Tickets
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *               type: object
 *               required:
 *                 - title
 *                 - description
 *                 - status
 *                 - user_id
 *               properties:
 *                 title:
 *                   description: titulo ticket
 *                   type: string
 *                 password:
 *                   description: descripción de ticket
 *                   type: string
 *                 status:
 *                   description: estado de ticket
 *                   type: string
 *                 user_id:
 *                   description: usuario asoacio al ticket
 *                   type: string
 *     responses:
 *       '200':
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   description: id ticket
 *                   type: number
 *                 title:
 *                   description: titulo ticket
 *                   type: string
 *                 description:
 *                   description: descripción ticket
 *                   type: string
 *                 status:
 *                   description: status ticket
 *                   type: string
 *                 user_id:
 *                   description: usuario asoaciado
 *                   type: number
 *       '400':
 *         description: 'Error'
 */
router.post(
  '/create',TicketsController.createTicket
);

/**
 * @swagger
 * /tickets/update:
 *   post:
 *     tags: [Tickets]
 *     description: Actualización de tickets
 *     summary: Tickets
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *               type: object
 *               required:
 *                 - id
 *                 - title
 *                 - description
 *                 - status
 *                 - user_id
 *               properties:
 *                 id:
 *                   description: id ticket
 *                   type: number
 *                 title:
 *                   description: titulo ticket
 *                   type: string
 *                 password:
 *                   description: descripción de ticket
 *                   type: string
 *                 status:
 *                   description: estado de ticket
 *                   type: string
 *                 user_id:
 *                   description: usuario asoacio al ticket
 *                   type: string
 *     responses:
 *       '204':
 *         description: Success
 *       '400':
 *         description: 'Error'
 */
router.post(
  '/update',TicketsController.updateTicket
);

/**
 * @swagger
 * /tickets/delete/{id}:
 *   delete:
 *     tags: [Tickets]
 *     description: Eliminación de ticket
 *     summary: Tickets
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       '200':
 *         description: Success
 *       '400':
 *         description: 'Error'
 */
router.delete(
  '/delete/:id',TicketsController.deleteTicket
);

export default router;