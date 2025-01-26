import { Router } from 'express';
import { UsersController } from '../controllers/usersController.js';
import { UsersRepo } from '../repositories/usersRepo.js';

export const usersRouter = Router();

const usersController = new UsersController(UsersRepo.getInstance());

// READ
usersRouter.get('/', usersController.getAllUsers.bind(usersController));
usersRouter.get('/:id', usersController.getUserById.bind(usersController));
// CREATE
usersRouter.post('/', usersController.addUser.bind(usersController));
