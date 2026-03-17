import express from "express";
import {
  addUserController,
  removeUserController,
  loginController,
  updateUserController,
  getLastConnectedUserController,
  getAllUsersControllers,
} from "../controllers/usersControllers.js";
import { checkToken } from "../middleware/checkToken.js";
export const usersRouter = express.Router();

usersRouter.post("/register/create", addUserController);
usersRouter.post("/login", loginController);
usersRouter.delete("/register/delete/:id", checkToken, removeUserController);
usersRouter.put("/register/update", checkToken, updateUserController);
usersRouter.get("/getUser", checkToken, getLastConnectedUserController);
usersRouter.get("/getAllUsers", checkToken, getAllUsersControllers);
