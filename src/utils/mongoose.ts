import config from 'config';
import { connect } from 'mongoose';

const mongoDbUrl: string = config.get('mongoDbUrl');

const connectWithMongo = async () => {
  await connect(mongoDbUrl);
  console.log('successufully connected to mongoDB');
};

export { connectWithMongo };