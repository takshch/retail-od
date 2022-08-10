import config from 'config';
import { connect } from 'mongoose';

const mongoDbUrl: string = config.get('mongoDbUrl');

const connectWithMongo = async () => {
  await connect(mongoDbUrl);
};

export { connectWithMongo };