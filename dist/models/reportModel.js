"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findExpenseTotalByMonth = exports.findExpenseByMonth = exports.findIncomeTotalByMonth = exports.findIncomeByMonth = void 0;
const db_1 = require("./db");
function findIncomeByMonth(userNum, month) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let conn = null;
            try {
                conn = yield db_1.pool.getConnection();
                let [result] = yield conn.query(`select options, sum(amount) as "optionAmount"
                from income_tbl
                where usernum = ? 
                and DATE_FORMAT(insert_date, "%m") = (?)
                group by options`, [userNum, month]);
                conn.release();
                return result;
            }
            catch (err) {
                throw err;
            }
        }
        catch (err) {
            throw err;
        }
    });
}
exports.findIncomeByMonth = findIncomeByMonth;
function findIncomeTotalByMonth(userNum, month) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let conn = null;
            try {
                conn = yield db_1.pool.getConnection();
                let [result] = yield conn.query(`select sum(amount) as "totalAmount"
                from income_tbl
                where usernum = ? 
                and DATE_FORMAT(insert_date, "%m") = (?)`, [userNum, month]);
                conn.release();
                return result;
            }
            catch (err) {
                throw err;
            }
        }
        catch (err) {
            throw err;
        }
    });
}
exports.findIncomeTotalByMonth = findIncomeTotalByMonth;
function findExpenseByMonth(userNum, month) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let conn = null;
            try {
                conn = yield db_1.pool.getConnection();
                let [result] = yield conn.query(`select options, sum(amount) as "optionAmount"
                from expense_tbl
                where usernum = ? 
                and DATE_FORMAT(insert_date, "%m") = (?)
                group by options`, [userNum, month]);
                conn.release();
                return result;
            }
            catch (err) {
                throw err;
            }
        }
        catch (err) {
            throw err;
        }
    });
}
exports.findExpenseByMonth = findExpenseByMonth;
function findExpenseTotalByMonth(userNum, month) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let conn = null;
            try {
                conn = yield db_1.pool.getConnection();
                let [result] = yield conn.query(`select sum(amount) as "totalAmount"
                from expense_tbl
                where usernum = ? 
                and DATE_FORMAT(insert_date, "%m") = (?)`, [userNum, month]);
                conn.release();
                return result;
            }
            catch (err) {
                throw err;
            }
        }
        catch (err) {
            throw err;
        }
    });
}
exports.findExpenseTotalByMonth = findExpenseTotalByMonth;
