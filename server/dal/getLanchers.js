import mongoose from "mongoose";
import { launcherSchema } from "../models/launcherModels.js";

const Launcher = mongoose.model("launchers", launcherSchema);

export async function getAllLAnchersDal() {
  return await Launcher.find({});
}
