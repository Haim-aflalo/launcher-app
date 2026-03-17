import { addUserDal } from "../dal/usersDal.js";

export async function addUserServices(data) {
  const { username, password, email, user_type, last_login } = data;
  const types = ["Admin", "Air Force", "Intellignece"];
  try {
    if (!username || !password || !email || !user_type) {
      throw new Error("Some field are missing");
    } else if (
      typeof username !== "string" ||
      typeof password !== "string" ||
      typeof email !== "string" ||
      typeof user_type !== "string"
    ) {
      throw new Error("Invalid type of fields");
    } else if (!types.includes(user_type)) {
      throw new Error("Invalid type of user");
    } else if (!last_login) {
      last_login = new Date().now();
    }
    return await addUserDal({
      username,
      password,
      email,
      user_type,
      last_login,
    });
  } catch (error) {
    console.error("an error occured:", error);
  }
}
