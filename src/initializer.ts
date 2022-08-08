import { json, Express } from 'express';
import morgan from 'morgan';

const initializer = (app: Express) => {
  app.use(json())
  app.use(morgan('combined'));
};

export default initializer;
