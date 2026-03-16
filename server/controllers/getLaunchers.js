import { getAllLAnchersDal } from "../dal/getLanchers.js";

export async function getLanchersController(req, res) {
  try {
    const launchers = await getAllLAnchersDal();
    res.status(200).json(launchers);
  } catch (error) {
    res.json({ error: error.message });
  }
}
