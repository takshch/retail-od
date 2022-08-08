import { Schema, model } from 'mongoose';

interface IUser {
  firstName: String,
  lastName: String,s
  mobile: number,
  email: string,
}

const userSchema = new Schema<IUser>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  mobile: { type: Number, required: true },
  email: { type: String, required: true },
});

const User = model<IUser>('User', userSchema);

export default User;