import debug from 'debug';
import mysql from 'mysql';
import { HOST, USER, PASSWORD, DATABASE } from './config.js';

const msg = debug('PAT:dbConnect');

export async function dbConnect() {
  try {
    const connection = await mysql.createConnection({
      host: HOST,
      user: USER,
      password: PASSWORD,
      database: DATABASE,
    });

    msg('DB connected successfully! :)');

    return connection;
  } catch (err: any) {
    throw new Error('Error connecting to MySQL: ' + err.message);
  }
}
