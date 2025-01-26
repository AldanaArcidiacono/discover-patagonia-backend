import express from 'express';
import { usersRouter } from './router/usersRouter.js';

export const app = express();

app.use(express.json());
app.use('/users', usersRouter);

app.get('/', (req, res) => {
    res.send('Discover Patagonia API!').end();
});
