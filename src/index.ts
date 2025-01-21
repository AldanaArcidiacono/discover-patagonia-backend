import debug from 'debug';
import http from 'http';
import express from 'express';
import { dbConnect } from './dbConnect.js';

const msg = debug('PAT:index');
export const app = express();
const port = 3000;

app.use(express.json());
const server = http.createServer(app);

server.on('listening', () => {
  const addr = server.address();
  let bind: string;
  if (addr === null) return;

  if (typeof addr === 'string') {
    bind = 'pipe ' + addr;
  } else {
    bind =
      addr.address === '::'
        ? `http://localhost:${addr?.port}`
        : `port ${addr?.port}`;
  }

  debug(`Listening on: ${bind}`);
});

app.get('/', (req, res) => {
  res.send('Discover Patagonia API!').end();
});

dbConnect()
  .then(() => {
    server.listen(port, () => {
      msg(`Listening on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

// Pass to controller
// app.get('/users', (req, res) => {
//   const sql = 'SELECT * FROM users';
//   db.query(sql, (err, data) => {
//     if (err) return res.json('ERROR');
//     else return res.json(data);
//   });
// });
