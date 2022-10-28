import { Router } from "express";
import * as logoutController from "../controllers/logoutController";

const logoutRouter = Router();

logoutRouter.post("/api/logout", logoutController.logout);

export {logoutRouter};