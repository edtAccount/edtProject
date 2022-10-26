import {Router} from "express"
import { login } from "../controllers/loginController";

const loginRouter = Router();

// loginRouter.get("/login", )
loginRouter.post("/login", login)

export {loginRouter}
