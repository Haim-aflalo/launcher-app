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
    { last_login: Date.now() },
  );
}

export async function updateUserDal(id, newValues) {
  return await User.findByIdAndUpdate(id, newValues);
}

export async function checkRole(user_type) {
  return await User.findOne({ user_type });
}

export async function getAllUsersDal() {
  return await User.find();
}

export async function getLastConnectedDal() {
  const users = await User.find();
  const lastLogged = users.sort(function (a, b) {
    return new Date(b.last_login) - new Date(a.last_login);
  });

  return lastLogged.slice(0, 1);
}
