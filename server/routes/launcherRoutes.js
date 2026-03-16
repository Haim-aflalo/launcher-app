import express from "express";
import { getLanchersController } from "../controllers/getLaunchers.js";

export const launcherRouter = express.Router();

launcherRouter.get("/launchers", getLanchersController);
