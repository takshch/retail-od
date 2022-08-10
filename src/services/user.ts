import User from "../models/User";

const findUserById = async (email: string) => {
  const user = await User.findOne({ email });
  return user;
};

export { findUserById };