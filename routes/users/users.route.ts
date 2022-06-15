import { Router } from 'express';
import UsersController from '../../controllers/users/users.controller';

// Rutas
const router = Router();

router.get(
  '/',UsersController.getUsers
);

router.post(
  '/create',UsersController.createUser
);

export default router;