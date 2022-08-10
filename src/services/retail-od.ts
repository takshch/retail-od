import User from '../models/User';
import Application from '../models/Application';
import { connection } from 'mongoose';

const { assign } = Object;

export interface IUserData {
  firstName: string,
  lastName: string,
  mobile: number,
  email: string,
};

interface IApplicationData {
  creditScore: number,
  address: string,
  aadhaarNumber: number,
  panNumber: string,
};

const createRetailOD = async (user: IUserData, application: IApplicationData) => {
  const session = await connection.startSession();
  session.startTransaction();

  try {
    const model = await User.create([user], { session });

    const { _id } = model[0];

    const applicationData = assign(application, { owner: _id });
    const applicationModels = await Application.create([applicationData], { session });

    const { _id: id } = applicationModels[0];

    await session.commitTransaction();
    return { id };
  } catch (e: any) {
    await session.abortTransaction();

    const { code, keyPattern } = e;

    if (code === 11000 && keyPattern?.email === 1) {
      return { error: 'email-already-exists' };
    }
  } finally {
    session.endSession();
  }
};

export { createRetailOD };