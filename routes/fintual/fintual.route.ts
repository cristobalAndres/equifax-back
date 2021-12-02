import { Router } from 'express';
import FintualController from '../../controllers/fintual/fintual.controller'

// Rutas
const router = Router();

router.get(
  '/stocks/:id',FintualController.getStocks,
);

router.get(
  '/stock/:id',FintualController.getStock,
);

export default router;