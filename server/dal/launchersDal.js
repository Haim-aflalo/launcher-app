import mongoose from "mongoose";
import { launcherSchema } from "../models/launcherModels.js";

const Launcher = mongoose.model("launchers", launcherSchema);

export async function getLaunchersDal() {
  return await Launcher.find({});
}
export async function getLaunchersByIdDal(id) {
  return await Launcher.findById(id).exec();
}
