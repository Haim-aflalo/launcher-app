import mongoose from "mongoose";
export const launcherSchema = new mongoose.Schema({
  city: String,
  body: String,
  latitude: Number,
  longitude: Number,
  name: String,
});
