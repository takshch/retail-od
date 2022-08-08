import { Schema, model } from 'mongoose';

interface IApplication {
  creditScore: Number,
  address: String,
  aaddharNumber: Number,
  panNumber: String,
}

const applicationSchema = new Schema<IApplication>({
  creditScore: { type: Number, required: true },
  address: { type: String, required: true },
  aaddharNumber: { type: Number, required: true },
  panNumber: { type: String, required: true },
});

const Application = model<IApplication>('Application', applicationSchema);

export default Application;
