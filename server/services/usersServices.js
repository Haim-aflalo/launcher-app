import {
  addUserDal,
  removeUserDal,
  loginDal,
  updateUserDal,
} from "../dal/usersDal.js";

export async function addUserService(data) {
  const { username, password, email, user_type, last_login } = data;
  const types = ["Admin", "Air Force", "Intellignece"];
  try {
    if (!username || !password || !email || !user_type || !last_login) {
      throw new Error("Some field are missing");
    } else if (
      typeof username !== "string" ||
      typeof password !== "string" ||
      typeof email !== "string" ||
      typeof user_type !== "string" ||
      typeof last_login !== "Date"
    ) {
      throw new Error("Invalid type of fields");
    } else if (!types.includes(user_type)) {
      throw new Error("Invalid type of user");
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

export async function removeUserService(id) {
  try {
    if (!id) {
      throw new Error("id is missing");
    }
    return await removeUserDal(id);
  } catch (error) {
    console.error("an error occured:", error);
  }
}

export async function loginService(username, password) {
  try {
    if (!username || !password) {
      throw new Error("fields missing");
    }
    return await loginDal(username, password);
  } catch (error) {
    console.error("an error occured:", error);
  }
}

export async function updateUserService(id, values) {
  try {
    const keys = ["username", "password", "email", "user_type", "last_login"];
    const valuesKeys = Object.keys(values);
    if (!id) {
      throw new Error("id missing");
    }
    for (let i of valuesKeys) {
      if (!keys.includes(i)) {
        throw new Error("invlaid values to update");
      }
    }
    return await updateUserDal(id, values);
  } catch (error) {
    console.error("an error occured:", error);
  }
}
