import { getLaunchersDal } from "../dal/launchersDal.js";
import {
  addLauncherService,
  getLauncherByIdService,
} from "../services/launchersServices.js";

export async function getLaunchersController(req, res) {
  try {
    const launchers = await getLaunchersDal();
    res.status(200).json(launchers);
  } catch (error) {
    res.json({ error: error.message });
  }
}
export async function getLaunchersByIdController(req, res) {
  try {
    const { id } = req.body;
    const launcher = await getLauncherByIdService(id);
    res.status(200).json(launcher);
  } catch (error) {
    res.json({ error: error.message });
  }
}

export async function addLauncherController(req, res) {
  try {
    const { city, rocketType, latitude, longitude, name } = req.body;
    const newLauncher = await addLauncherService({
      city,
      rocketType,
      latitude,
      longitude,
      name,
    });
    res.status(200).json(newLauncher)
  } catch (error) {
    res.json({ error: error.message });
  }
}
