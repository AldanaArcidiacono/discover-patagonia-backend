import createDebug from 'debug';
import mysql from 'mysql';
import { HOST, USER, PASSWORD, DATABASE } from './config.js';

const debug = createDebug('PAT:dbConnect');

let connection: any;

export function dbConnect() {
    if (!connection) {
        connection = mysql.createConnection({
            host: HOST,
            user: USER,
            password: PASSWORD,
            database: DATABASE,
        });

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
