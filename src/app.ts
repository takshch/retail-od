import express, { Express } from 'express';
import router from './routes/index';
import initialize from './initializer';
import { connectWithMongo } from './utils/mongoose';

const app: Express = express();

connectWithMongo();

initialize(app);

app.use(router);

export default app;