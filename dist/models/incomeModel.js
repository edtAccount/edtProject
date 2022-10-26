"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIncome = exports.findIncomes = void 0;
const db_1 = require("./db");
//연결 완료
db_1.connection.connect();
function findIncomes() {
    db_1.connection.query('select * from income_tbl', (err, rows) => {
        if (err) {
            throw err;
        }
        return JSON.stringify(rows);
    });
}
exports.findIncomes = findIncomes;
function getIncome(req, res) {
    db_1.connection.query('select * from income_tbl', (err, rows) => {
        if (err) {
            throw err;
        }
        res.send(rows);
    });
}
exports.getIncome = getIncome;
