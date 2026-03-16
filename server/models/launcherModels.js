import mongoose from "mongoose";
const { Schema } = mongoose;

const launcherSchema = new Schema({
  city: String,
  body: String,
  latitude: Number,
  longitude: Number,
  name: String,
});
