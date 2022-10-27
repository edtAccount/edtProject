"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectReport = void 0;
const db_1 = __importDefault(require("../config/db"));
const connection = db_1.default.init();
connection.connect();
function selectReport() {
    connection.query('select * from income_tbl', (err, rows) => {
        if (err) {
            throw err;
        }
        return rows;
    });
}
exports.selectReport = selectReport;
