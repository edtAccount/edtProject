import {Router} from "express"
import * as getController from "../controllers/getController";
import { privatePageValidate } from "../middleware/validations";
import * as indexController from "../controllers/indexController";
const indexRouter = Router();

indexRouter.get("/", privatePageValidate, getController.getPrivateFileResource);

//income 생성,조회,수정, 삭제
indexRouter.post("/api/income", indexController.createIncome)

indexRouter.get("/api/incomes", indexController.getIncomes)

indexRouter.put("/api/income/:incomeId", indexController.updateIncome)

indexRouter.delete("/api/income/:incomeId", indexController.deleteIncome)

//expense 생성,조회,수정, 삭제
indexRouter.post("/api/expense", indexController.createExpense)

indexRouter.get("/api/expenses", indexController.getExpenses)

indexRouter.put("/api/expense/:expenseId", indexController.updateExpense)

indexRouter.delete("/api/expense/:expenseId", indexController.deleteExpense)


export {indexRouter}
