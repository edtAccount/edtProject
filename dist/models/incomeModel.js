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
exports.findIncomes = void 0;
const db_1 = require("./db");
function findIncomes() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            db_1.connection.query('select * from income_tbl', (err, rows) => __awaiter(this, void 0, void 0, function* () {
                if (err) {
                    throw err;
                }
                return yield rows;
            }));
        }
        catch (err) {
            console.log(err);
        }
    });
}
exports.findIncomes = findIncomes;
// export function getIncome(req, res) {
//     connection.query('select * from income_tbl', (err, rows)=>{
//         if(err){
//             throw err;
//         }
//         res.send(rows)
//     })
// }
