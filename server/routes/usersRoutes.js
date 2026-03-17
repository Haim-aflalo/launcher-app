import express from "express";
import { addLauncherController } from "../controllers/launchersControllers.js";

export const usersRouter = express.Router();

usersRouter.post("/register/create", addLauncherController);
