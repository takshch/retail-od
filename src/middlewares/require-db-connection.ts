import { RequestHandler } from "express";
import { connection } from 'mongoose';

const requireDBConnection: RequestHandler = (_, res, next) => {
  if (connection.readyState === 1) {
    next();
  } else {
    console.log('Not connected to MongoDB');
    res.status(500).send();
  }
};

export { requireDBConnection };