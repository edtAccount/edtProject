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
exports.getExpenseSelect = void 0;
const db_1 = require("./db");
function getExpenseSelect(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        db_1.connection.query(`select options, sum(amount) as "optionAmount"
        from expense_tbl
        where DATE_FORMAT(insert_date, "%m") = "10"
        group by options`, (err, rows) => {
            if (err) {
                throw err;
            }
            res.send(rows);
        });
    });
}
exports.getExpenseSelect = getExpenseSelect;
