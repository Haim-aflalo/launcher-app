import { getLaunchersDal } from "../dal/launchersDal.js";
import { getLauncherByIdService } from "../services/launchersServices.js";

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
    const {id} = req.body
    const launcher = await getLauncherByIdService(id);
    res.status(200).json(launcher);
  } catch (error) {
    res.json({ error: error.message });
  }
}

