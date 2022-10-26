"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIncomeByMonth = exports.getExpenseByMonth = exports.connection = void 0;
const mysql_1 = __importDefault(require("mysql"));
const config_1 = require("../config/config");
//커넥트 옵션 
exports.connection = mysql_1.default.createConnection(config_1.connetOptions);
exports.connection.connect();
function getExpenseByMonth(req, res) {
    exports.connection.query(`select options, sum(amount) as "optionAmount"
        from expense_tbl
        where DATE_FORMAT(insert_date, "%m") = "10"
        group by options`, (err, rows) => {
        if (err) {
            throw err;
        }
        res.send(rows);
    });
}
exports.getExpenseByMonth = getExpenseByMonth;
function getIncomeByMonth(req, res) {
    exports.connection.query(`select options, sum(amount) as "optionAmount"
        from income_tbl
        where DATE_FORMAT(insert_date, "%m") = "10"
        group by options`, (err, rows) => {
        if (err) {
            throw err;
        }
        res.send(rows);
    });
}
exports.getIncomeByMonth = getIncomeByMonth;
