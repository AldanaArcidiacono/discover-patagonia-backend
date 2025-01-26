import createDebug from 'debug';
import { db } from '../dbConnect.js';
import { PartialUser, User } from '../types/Users.js';
import { TUsersRepo } from '../types/RepoTypes';

const debug = createDebug('PAT:Repo:Users');

export class UsersRepo implements TUsersRepo<User> {
    static instance: UsersRepo;

    public static getInstance(): UsersRepo {
        if (!UsersRepo.instance) UsersRepo.instance = new UsersRepo();
        return UsersRepo.instance;
    }

    private constructor() {
        debug('Instance');
    }

    private queryPromise = (sql: string, params: any[] = []) => {
        return new Promise<any[] | any>((resolve, reject) => {
            db.query(sql, params, (error, results) => {
                if (error) return reject(error);
                resolve(results);
            });
        });
    };

    async getAll(): Promise<Array<User>> {
        debug('Get Users');

        return this.queryPromise('SELECT * FROM users');
    }

    async get(id: number): Promise<Array<User>> {
        debug('Get User By ID');

        return this.queryPromise('SELECT * FROM users WHERE id = ?', [id]);
    }

    async create(newUser: PartialUser): Promise<PartialUser> {
        return this.queryPromise(
            'INSERT INTO users (name, surname, user_name, age, last_event_attendance, email) VALUES (?, ?, ?, ?, ?, ?)',
            [
                newUser.name,
                newUser.surname,
                newUser.user_name,
                newUser.age || null,
                newUser.last_event_attendance || null,
                newUser.email,
            ]
        ).then((result: any) => {
            return { ...newUser, id: result.insertId };
        });
    }
}
