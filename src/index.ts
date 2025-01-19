import debug from 'debug';
import express from 'express';
import mysql from 'mysql';
import { HOST, USER, PASSWORD, DATABASE } from './config.js';

const msg = debug('PAT:index');
const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: HOST,
  user: USER,
  password: PASSWORD,
  database: DATABASE,
});

app.get('/', (req, res) => {
  res.json('Hello, TypeScript Node Express!');
});
app.get('/users', (req, res) => {
  const sql = 'SELECT * FROM users';
  db.query(sql, (err, data) => {
    if (err) return res.json('ERROR');
    else return res.json(data);
  });
});

app.listen(port, () => {
  msg(`Listening on ${port}`);
  console.log(`Server is running on http://localhost:${port}`);
});
