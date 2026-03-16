import { getLauncherByIdDal } from "../dal/launchersDal.js";

export async function getLauncherByIdService(id) {
  try {
    if (!id) {
      throw new Error("id is missing");
    }
    return await getLauncherByIdDal(id);
  } catch (error) {
    console.error("an error occured:", error);
  }
}
