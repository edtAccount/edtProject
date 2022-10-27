import {Router} from "express"
import * as loginController from "../controllers/loginController";

const loginRouter = Router();

loginRouter.post("/login", loginController.login)
loginRouter.get("/login", loginController.validateLoginPage)

export {loginRouter}
