"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const incomeController_1 = require("../controllers/incomeController");
// import {getIncome} from "../models/incomeModel"
const router = (0, express_1.Router)();
exports.router = router;
router.get("/api/report", incomeController_1.getIncome);
