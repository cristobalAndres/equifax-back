import { Router } from 'express';
import AuthController from '../../controllers/auth/auth.controller'
import Middleware from '../../middleware/validToken';

// Rutas
const router = Router();

router.post(
  '/login',AuthController.login
);

export default router;