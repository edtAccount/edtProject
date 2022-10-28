import {Router} from "express"
import * as getController from "../controllers/getController";
import { privatePageValidate } from "../middleware/validations";

const indexRouter = Router();

// indexRouter.use(privatePageValidate)

indexRouter.get("/", privatePageValidate, getController.getPrivateFileResource)

export {indexRouter}
