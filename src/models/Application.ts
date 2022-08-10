import { Schema, model } from 'mongoose';
import uid from '../utils/uid';

export interface IApplication {
  _id: string,
  creditScore: number,
  address: string,
  aadhaarNumber: number,
  panNumber: string,
  status: 'initialized' | 'approved',
  owner: string,
}

const applicationSchema = new Schema<IApplication>({
  _id: { type: String, default: uid, required: true },
  creditScore: { type: Number, required: true },
  address: { type: String, required: true },
  aadhaarNumber: { type: Number, required: true },
  panNumber: { type: String, required: true },
  status: { type: String, enum: ['initialized', 'approved'], default: 'initialized', required: true },
  owner: { type: String, required: true },
});

const Application = model<IApplication>('Application', applicationSchema);

export default Application;
