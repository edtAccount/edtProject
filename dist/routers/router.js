"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
// import {getIncome} from "../controllers/incomeController"
// import {getIncome, getIncomeSelect, getExpenseSelect} from "../models/incomeModel"
const db_1 = require("../models/db");
const router = (0, express_1.Router)();
exports.router = router;
router.get("/report/income", db_1.getIncomeByMonth);
router.get("/report/expense", db_1.getExpenseByMonth);
