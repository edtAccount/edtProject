"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reportRouter = void 0;
const express_1 = require("express");
const reportController = __importStar(require("../controllers/reportController"));
const reportRouter = (0, express_1.Router)();
exports.reportRouter = reportRouter;
//월별 카테고리별 소득
reportRouter.get("/report/income/:month", reportController.getIncomeByMonth);
//월별 소득 총계
reportRouter.get("/report/incomeTotal/:month", reportController.getIncomeTotalByMonth);
//월별 카테고리별 소비
reportRouter.get("/report/expense/:month", reportController.getExpenseByMonth);
//월별 소비 총계
reportRouter.get("/report/expenseTotal/:month", reportController.getExpenseTotalByMonth);
