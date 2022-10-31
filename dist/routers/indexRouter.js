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
exports.indexRouter = void 0;
const express_1 = require("express");
const getController = __importStar(require("../controllers/getController"));
const validations_1 = require("../middleware/validations");
const indexController = __importStar(require("../controllers/indexController"));
const indexRouter = (0, express_1.Router)();
exports.indexRouter = indexRouter;
indexRouter.get("/", validations_1.privatePageValidate, getController.getPrivateFileResource);
//income 생성,조회,수정, 삭제
indexRouter.post("/api/income", indexController.createIncome);
indexRouter.get("/api/incomes", indexController.getIncomes);
indexRouter.put("/api/income/:incomeId", indexController.updateIncome);
indexRouter.delete("/api/income/:incomeId", indexController.deleteIncome);
//expense 생성,조회,수정, 삭제
indexRouter.post("/api/expense", indexController.createExpense);
indexRouter.get("/api/expenses", indexController.getExpenses);
indexRouter.put("/api/expense/:expenseId", indexController.updateExpense);
indexRouter.delete("/api/expense/:expenseId", indexController.deleteExpense);
// //동적 라우팅
// const routerFiles = fs.readdirSync("./router")
// routerFiles.forEach(async(file)=>{
//     const {default : _router}
// })
