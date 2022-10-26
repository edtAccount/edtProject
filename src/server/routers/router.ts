<<<<<<< Updated upstream
import express from "express";

const router = express.Router();

const reportController = require("../controllers/reportController");

router.get('/report', reportController.getReport);

module.exports = router;
=======
import {Router} from "express"
// import {getIncome} from "../controllers/incomeController"
import {getIncome, getIncomeSelect} from "../models/incomeModel"
import {getExpenseSelect} from "../models/expenseModel"

const router = Router()

router.get("/api/report/income", getIncomeSelect)

router.get("/api/report/expense", getExpenseSelect)

export {router}
>>>>>>> Stashed changes
