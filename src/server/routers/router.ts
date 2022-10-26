import {Router} from "express"
// import {getIncome} from "../controllers/incomeController"
import {getIncome} from "../models/incomeModel"

const router = Router()

router.get("/api/report", getIncome)

export {router}