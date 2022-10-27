import {Router} from "express"
import * as loginController from "../controllers/loginController";

const loginRouter = Router();

// loginRouter.get("/login", )
loginRouter.post("/login", loginController.login)

export {loginRouter}
