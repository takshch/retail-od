import { Schema, model } from 'mongoose';
import uid from '../utils/uid';

export interface IUser {
  _id: string,
  firstName: string,
  lastName: string,
  mobile: number,
  email: string,
}

const userSchema = new Schema<IUser>({
  _id: { type: String, default: uid, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  mobile: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
});

const User = model<IUser>('User', userSchema);

export default User;
