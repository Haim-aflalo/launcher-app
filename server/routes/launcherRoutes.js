import express from "express";
import {
  addLauncherController,
  getLaunchersByIdController,
  getLaunchersController,
} from "../controllers/launchersControllers.js";

export const launcherRouter = express.Router();

launcherRouter.get("/launchers", getLaunchersController);
launcherRouter.get("/launchers/id", getLaunchersByIdController);
launcherRouter.post("/launchers", addLauncherController);
