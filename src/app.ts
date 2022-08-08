import express, { Express } from 'express';
import router from './routes/index';
import initialize from './initializer';

const app: Express = express();

initialize(app);

app.use(router);

export default app;