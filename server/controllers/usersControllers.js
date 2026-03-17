import {
  addUserService,
  removeUserService,
  loginService,
  updateUserService,
} from "../services/usersServices.js";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { getAllUsersDal, getLastConnectedDal } from "../dal/usersDal.js";

export async function addUserController(req, res) {
  try {
    const { username, password, email, user_type } = req.body;
    const newUser = await addUserService({
      username,
      password,
      email,
      user_type,
    });
    res.status(200).json(newUser);
  } catch (error) {
    res.json({ error: error.message });
  }
}

export async function removeUserController(req, res) {
  try {
    const { id } = req.params;
    await removeUserService(id);
    res.status(200).json({ message: "user deleted successfully" });
  } catch (error) {
    res.json({ error: error.message });
  }
}

export async function loginController(req, res) {
  try {
    const { username, password } = req.body;
    const user = await loginService(username, password);
    const token = jwt.sign(
      { id: user.id, user_type: user.user_type },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      },
    );
    res.json({ message: "Login successful", token });
  } catch (error) {
    res.json({ error: error.message });
  }
}

export async function updateUserController(req, res) {
  try {
    const { id, values } = req.body;
    const updatedUser = await updateUserService(id, values);
    res.status(200).json({ message: "Login successful", updatedUser });
  } catch (error) {
    res.json({ error: error.message });
  }
}

export async function getLastConnectedUserController(req, res) {
  try {
    const lastConnected = await getLastConnectedDal();
    res.status(200).json(lastConnected);
  } catch (error) {
    res.json({ error: error.message });
  }
}
export async function getAllUsersControllers(req, res) {
  try {
    const allUsers = await getAllUsersDal();
    res.status(200).json(allUsers);
  } catch (error) {
    res.json({ error: error.message });
  }
}
