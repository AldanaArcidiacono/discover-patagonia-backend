import createDebug from 'debug';
import { Request, Response, NextFunction } from 'express';
import { getUsers } from '../repositories/usersRepo.js';

const debug = createDebug('PAT:Controller');

export const getAllUsers = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    debug('getAllUsers');
    try {
        const users = await getUsers();
        res.json(users);
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
        res.status(500).json({ error: 'Error al obtener datos' });
    }
};
