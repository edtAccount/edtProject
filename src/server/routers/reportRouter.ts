import {Router} from "express"
import * as reportController from "../controllers/reportController"
import * as getController from "../controllers/getController";
import { privatePageValidate} from "../middleware/validations"

const reportRouter = Router()

reportRouter.get("/report", privatePageValidate,  getController.getPrivateFileResource);

//월별 카테고리별 소득
reportRouter.get("/api/report/income/:month", reportController.getIncomeByMonth)
//월별 소득 총계
reportRouter.get("/api/report/incomeTotal/:month", reportController.getIncomeTotalByMonth)

//월별 카테고리별 소비
reportRouter.get("/api/report/expense/:month", reportController.getExpenseByMonth)
//월별 소비 총계
reportRouter.get("/api/report/expenseTotal/:month", reportController.getExpenseTotalByMonth)


export {reportRouter}