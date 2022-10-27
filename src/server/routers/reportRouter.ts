import {Router} from "express"
import * as reportController from "../controllers/reportController"
import {loginRequired} from "../middleware/loginRequired"

const reportRouter = Router()

// reportRouter.use(loginRequired)

//월별 카테고리별 소득
reportRouter.get("/report/income/:month", reportController.getIncomeByMonth)
//월별 소득 총계
reportRouter.get("/report/incomeTotal/:month", reportController.getIncomeTotalByMonth)

//월별 카테고리별 소비
reportRouter.get("/report/expense/:month", reportController.getExpenseByMonth)
//월별 소비 총계
reportRouter.get("/report/expenseTotal/:month", reportController.getExpenseTotalByMonth)


export {reportRouter}