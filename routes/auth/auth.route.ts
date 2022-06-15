import { Router } from 'express';
import AuthController from '../../controllers/auth/auth.controller';

// Rutas
const router = Router();

router.post(
  '/login',AuthController.login
);

export default router;