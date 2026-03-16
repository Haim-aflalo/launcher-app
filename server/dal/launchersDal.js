import mongoose from "mongoose";
import { launcherSchema } from "../models/launcherModels.js";

const Launcher = mongoose.model("launchers", launcherSchema);

export async function getLaunchersDal() {
  return await Launcher.find({});
}
export async function getLauncherByIdDal(id) {
  return await Launcher.findById(id).exec();
}

export async function addLauncherDal(launcher) {
  const newLauncher = new Launcher(launcher);
  return newLauncher.save();
}