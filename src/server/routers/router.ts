import {Router} from "express"
// import {getIncome} from "../controllers/incomeController"
// import {getIncome, getIncomeSelect, getExpenseSelect} from "../models/incomeModel"
import { getIncomeByMonth, getExpenseByMonth} from "../models/db"

const router = Router()

router.get("/report/income", getIncomeByMonth)

router.get("/report/expense", getExpenseByMonth)


export {router}