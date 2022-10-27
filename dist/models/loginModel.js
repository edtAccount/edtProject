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
exports.selectUser = void 0;
const db_1 = require("./db");
function selectUser(username, userpwd) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const connection = yield db_1.pool.getConnection();
            try {
                const [rows] = yield connection.query(`SELECT * FROM USER_TBL WHERE userId = (?) AND userpwd = (?)`, [username, userpwd]);
                connection.release();
                return rows;
            }
            catch (err) {
                console.log("Query err");
                connection.release();
                return false;
            }
        }
        catch (err) {
            console.log("getConnection err");
            return false;
        }
    });
}
exports.selectUser = selectUser;
