import createDebug from 'debug';
import { db } from '../dbConnect.js';

const debug = createDebug('PAT:Repo');

export const getUsers = (): Promise<any[]> => {
    debug('GetUsers');
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM users', (error, results) => {
            if (error) {
                return reject(error);
            } else resolve(results);
        });
    });
};
