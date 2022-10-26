import {Router} from "express"
// import {getIncome} from "../controllers/incomeController"
import {getIncome, getIncomeSelect} from "../models/incomeModel"
import {getExpenseSelect} from "../models/expenseModel"

const router = Router()

router.get("/api/report/income", getIncomeSelect)

router.get("/api/report/expense", getExpenseSelect)

export {router}