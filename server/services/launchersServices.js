import { addLauncherDal, getLauncherByIdDal } from "../dal/launchersDal.js";

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

export async function addLauncherService(data) {
  try {
    const { city, rocketType, latitude, longitude, name } = data;
    if (!city || !rocketType || !latitude || !longitude || !name) {
      throw new Error("some fields are missing");
    } else if (
      typeof city !== "string" ||
      typeof rocketType !== "string" ||
      typeof name !== "string" ||
      typeof latitude !== "number" ||
      typeof longitude !== "number"
    ) {
      throw new Error("Invalid type of fields");
    } else if (
      !rocketType.includes(["Shahab3", "Fetah110", "Radwan", "Kheibar"])
    ) {
      throw new Error("Invalid type of rockets");
    }
    return await addLauncherDal({
      city,
      rocketType,
      latitude,
      longitude,
      name,
    });
  } catch (error) {
    console.error("an error occured:", error);
  }
}
