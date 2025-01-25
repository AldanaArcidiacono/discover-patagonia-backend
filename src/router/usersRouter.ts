import { Router } from 'express';
import { getAllUsers } from '../controllers/usersController.js';

export const usersRouter = Router();

// GET /users
usersRouter.get('/', getAllUsers);
