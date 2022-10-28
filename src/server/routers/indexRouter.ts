import {Router} from "express"
import * as indexController from "../controllers/indexController"

const indexRouter = Router()

//income 생성,조회,수정, 삭제
indexRouter.post("/income", indexController.createIncome)

indexRouter.get("/incomes", indexController.getIncomes)

indexRouter.put("/income/:incomeId", indexController.updateIncome)

indexRouter.delete("/income/:incomeId", indexController.deleteIncome)

//expense 생성,조회,수정, 삭제
indexRouter.post("/expense", indexController.createExpense)

indexRouter.get("/expenses", indexController.getExpenses)

indexRouter.put("/expense/:expenseId", indexController.updateExpense)

indexRouter.delete("/expense/:expenseId", indexController.deleteExpense)


export {indexRouter}
