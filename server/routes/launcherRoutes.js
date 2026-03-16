import express from "express";
import {
  getLaunchersByIdController,
  getLaunchersController,
} from "../controllers/launchersControllers.js";

export const launcherRouter = express.Router();

launcherRouter.get("/launchers", getLaunchersController);
launcherRouter.get("/launchers/id", getLaunchersByIdController);
