import {Router} from "express"
import * as signupController from "../controllers/signupController";
import * as getController from "../controllers/getController";
import { publicPageValidate } from "../middleware/validations";

const signupRouter = Router();

signupRouter.post("/api/signup", signupController.signup)
signupRouter.get("/signup", publicPageValidate, getController.getPublicFileResource)

export {signupRouter}
