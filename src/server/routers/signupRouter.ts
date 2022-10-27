import {Router} from "express"
import * as signupController from "../controllers/signupController";

const signupRouter = Router();

signupRouter.post("/signup", signupController.signup)

export {signupRouter}
