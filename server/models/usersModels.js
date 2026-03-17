import mongoose from "mongoose";
const types = ["Admin", "Air Force", "Intelligence"];
export const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  user_type: { type: String, enum: types },
  last_login: Date,
});
