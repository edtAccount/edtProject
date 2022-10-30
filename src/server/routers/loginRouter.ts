import {Router} from "express"
import * as loginController from "../controllers/loginController";
import * as getController from "../controllers/getController";
import { publicPageValidate } from "../middleware/validations";

const loginRouter = Router();
// loginRouter.use(publicPageValidate);

loginRouter.post("/api/login", loginController.login)
loginRouter.get("/login", publicPageValidate,  getController.getPublicFileResource)

export {loginRouter}
