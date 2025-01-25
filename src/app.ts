import express from 'express';
import { usersRouter } from './router/usersRouter.js';

export const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Discover Patagonia API!').end();
});

app.use('/users', usersRouter);
