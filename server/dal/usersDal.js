import mongoose from "mongoose";
import { userSchema } from "../models/usersModels.js";

const User = mongoose.model("users", userSchema);

export async function addUserDal(data) {
  const newUser = new User(data);
  return await newUser.save();
}

export async function removeUserDal(id) {
  return await User.findByIdAndDelete(id);
}

export async function loginDal(username, password) {
  return await User.findOneAndUpdate(
    { username, password },
    { last_login: new Date().toISOString() },
  );
}

export async function updateUserDal(id, newValues) {
  return await User.findByIdAndUpdate(id, newValues);
}
