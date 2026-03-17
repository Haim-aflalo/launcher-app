import mongoose from "mongoose";
import { userSchema } from "../models/usersModels.js";

const User = mongoose.model("users", userSchema);

export async function addUserDal(data) {
  const newUser = new User(data);
  return await newUser.save();
}
