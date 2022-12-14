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
exports.removeExpense = exports.modifyExpense = exports.findExpenses = exports.addExpense = exports.removeIncome = exports.modifyIncome = exports.findIncomes = exports.addIncome = void 0;
const db_1 = require("./db");
//userNum:number, options:string, amount:number, content:string, actualDate:Date
function addIncome(incomeInfo) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { userNum, options, amount, content, actualDate } = incomeInfo;
            let conn = null;
            try {
                conn = yield db_1.pool.getConnection();
                let [result] = yield conn.query(`INSERT INTO income_tbl(userNum, options, amount, content, actualDate)
         VALUES(?, ?, ?, ? ,?)`, [userNum, options, amount, content, actualDate]);
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
exports.addIncome = addIncome;
function findIncomes(userNum) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let conn = null;
            try {
                conn = yield db_1.pool.getConnection();
                let [result] = yield conn.query(`select *
            from income_tbl
            where usernum = (?)`, [userNum]);
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
exports.findIncomes = findIncomes;
function modifyIncome(incomeId, updateInfo) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let conn = null;
            try {
                conn = yield db_1.pool.getConnection();
                let result = null;
                for (let [key, value] of Object.entries(updateInfo)) {
                    if (value !== null) {
                        yield conn.query(`update income_tbl
                set ${key} = ? 
                where id = ?`, [value, incomeId]);
                    }
                }
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
exports.modifyIncome = modifyIncome;
function removeIncome(incomeId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let conn = null;
            try {
                conn = yield db_1.pool.getConnection();
                let [result] = yield conn.query(`delete from income_tbl where id = ?`, [incomeId]);
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
exports.removeIncome = removeIncome;
function addExpense(expenseInfo) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { userNum, options, amount, content, actualDate } = expenseInfo;
            let conn = null;
            try {
                conn = yield db_1.pool.getConnection();
                let [result] = yield conn.query(`INSERT INTO expense_tbl(userNum, options, amount, content, actualDate)
         VALUES(?, ?, ?, ? ,?)`, [userNum, options, amount, content, actualDate]);
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
exports.addExpense = addExpense;
function findExpenses(userNum) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let conn = null;
            try {
                conn = yield db_1.pool.getConnection();
                let [result] = yield conn.query(`select *
            from expense_tbl
            where usernum = (?)`, [userNum]);
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
exports.findExpenses = findExpenses;
function modifyExpense(expenseId, updateInfo) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let conn = null;
            try {
                conn = yield db_1.pool.getConnection();
                let result = null;
                for (let [key, value] of Object.entries(updateInfo)) {
                    if (value !== null) {
                        yield conn.query(`update expense_tbl
                set ${key} = ? 
                where id = ?`, [value, expenseId]);
                    }
                }
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
exports.modifyExpense = modifyExpense;
function removeExpense(expenseId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let conn = null;
            try {
                conn = yield db_1.pool.getConnection();
                let [result] = yield conn.query(`delete from expense_tbl where id = ?`, [expenseId]);
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
exports.removeExpense = removeExpense;
