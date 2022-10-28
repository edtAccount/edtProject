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
function findIncomeByMonth(month) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let conn = null;
            try {
                conn = yield db_1.pool.getConnection();
                let [result] = yield conn.query(`select options, sum(amount) as "optionAmount"
                from income_tbl
                where DATE_FORMAT(insert_date, "%m") = (?)
                group by options`, [month]);
                conn.release();
                return result;
            }
            catch (err) {
                console.log(err);
            }
        }
        catch (err) {
            console.log(err);
        }
    });
}
exports.findIncomeByMonth = findIncomeByMonth;
function findIncomeTotalByMonth(month) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let conn = null;
            try {
                conn = yield db_1.pool.getConnection();
                let [result] = yield conn.query(`select sum(amount) as "totalAmount"
                from income_tbl
                where DATE_FORMAT(insert_date, "%m") = (?)`, [month]);
                conn.release();
                return result;
            }
            catch (err) {
                console.log(err);
            }
        }
        catch (err) {
            console.log(err);
        }
    });
}
exports.findIncomeTotalByMonth = findIncomeTotalByMonth;
function findExpenseByMonth(month) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let conn = null;
            try {
                conn = yield db_1.pool.getConnection();
                let [result] = yield conn.query(`select options, sum(amount) as "optionAmount"
                from expense_tbl
                where DATE_FORMAT(insert_date, "%m") = (?)
                group by options`, [month]);
                conn.release();
                return result;
            }
            catch (err) {
                console.log(err);
            }
        }
        catch (err) {
            console.log(err);
        }
    });
}
exports.findExpenseByMonth = findExpenseByMonth;
function findExpenseTotalByMonth(month) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let conn = null;
            try {
                conn = yield db_1.pool.getConnection();
                let [result] = yield conn.query(`select sum(amount) as "totalAmount"
                from expense_tbl
                where DATE_FORMAT(insert_date, "%m") = (?)`, [month]);
                conn.release();
                return result;
            }
            catch (err) {
                console.log(err);
            }
        }
        catch (err) {
            console.log(err);
        }
    });
}
exports.findExpenseTotalByMonth = findExpenseTotalByMonth;
