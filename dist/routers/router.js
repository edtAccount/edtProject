"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
// import {getIncome} from "../controllers/incomeController"
const incomeModel_1 = require("../models/incomeModel");
const expenseModel_1 = require("../models/expenseModel");
const router = (0, express_1.Router)();
exports.router = router;
router.get("/api/report/income", incomeModel_1.getIncomeSelect);
router.get("/api/report/expense", expenseModel_1.getExpenseSelect);
