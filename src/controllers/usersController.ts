import createDebug from 'debug';
import { Request, Response, NextFunction } from 'express';
import { PartialUser, User } from '../types/Users';
import { TUsersRepo } from '../types/RepoTypes';

const debug = createDebug('PAT:Controller:Users');

export class UsersController {
    constructor(public readonly usersRepo: TUsersRepo<PartialUser>) {
        debug('Instance');
    }

    async getAllUsers(req: Request, res: Response, next: NextFunction) {
        try {
            debug('getAllUsers');

            const users = await this.usersRepo.getAll();
            res.json(users);
        } catch (error) {
            debug('getAllUsers ERROR');

            res.status(500).json({ error: 'Error getting all the users' });
            next(error);
        }
    }

    async getUserById(req: Request, res: Response, next: NextFunction) {
        try {
            debug('getUserById');

            const userID = Number(req.params.id);
            const users = await this.usersRepo.get(userID);
            const user = users[0];

            // if (!user) return res.status(404).json({ error: 'User not found' });

            res.json(user);
        } catch (error) {
            debug('getUserById ERROR');

            res.status(500).json({
                error: `Error getting the user ${req.params.id}`,
            });
            next(error);
        }
    }

    async addUser(req: Request, res: Response, next: NextFunction) {
        try {
            this.usersRepo.create({
                name: req.body.name,
                surname: req.body.surname,
                user_name: req.body.user_name,
                age: req.body.age,
                last_event_attendance: req.body.last_event_attendance,
                email: req.body.email,
            });

            res.json({ ok: true });
        } catch (error) {
            debug('addUser ERROR');

            res.status(500).json({ error: 'Error creating the user' });
            next(error);
        }
    }
}
