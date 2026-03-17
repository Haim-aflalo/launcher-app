import express from "express";
import {
  addLauncherController,
  getLaunchersByIdController,
  getLaunchersController,
  removeLauncherController,
} from "../controllers/launchersControllers.js";

export const launchersRouter = express.Router();

launchersRouter.get("/launchers", getLaunchersController);
launchersRouter.get("/launchers/id", getLaunchersByIdController);
launchersRouter.post("/launchers", addLauncherController);
launchersRouter.delete("/launchers/:id", removeLauncherController);
