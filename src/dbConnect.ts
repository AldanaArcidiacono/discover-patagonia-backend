import createDebug from 'debug';
import mysql from 'mysql';
import { HOST, USER, PASSWORD, DATABASE } from './config.js';

const debug = createDebug('PAT:dbConnect');

let connection: any;
const dbBasicData = {
    host: HOST,
    user: USER,
    password: PASSWORD,
    database: DATABASE,
};

export function dbConnect() {
    if (!connection) {
        connection = mysql.createConnection(dbBasicData);

        connection.connect((err: any) => {
            if (err) {
                console.error('Error connecting to MySQL:', err.message);
                process.exit(1);
            }
            debug('Connected to MySQL');
        });
    }
    return connection;
}

export const db = mysql.createPool(dbBasicData);
