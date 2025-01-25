import createDebug from 'debug';
import http from 'http';
import { dbConnect } from './dbConnect.js';
import { app } from './app.js';

const debug = createDebug('PAT:index');
const port = 3000;

const server = http.createServer(app);

server.listen(port, async () => {
    try {
        await dbConnect();
        debug('DB connected successfully! :)');
    } catch (error) {
        console.error('Error connecting to DB: ', error);
        server.emit('error', error);
        process.exit(1);
    }

    debug(`Listening on http://localhost:${port}`);
});
