import { Router } from 'express';
import TicketsController from '../../controllers/tickets/tickets.controller';

// Rutas
const router = Router();

router.get(
  '/',TicketsController.getTickets
);

router.post(
  '/create',TicketsController.createTicket
);

router.post(
  '/update',TicketsController.updateTicket
);

export default router;