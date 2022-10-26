"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIncome = void 0;
const incomeModel_1 = require("../models/incomeModel");
function getIncome(req, res) {
    try {
        const data = (0, incomeModel_1.findIncomes)();
        console.log(data);
        res.send(JSON.stringify(data));
    }
    catch (err) {
        console.log(err);
    }
}
exports.getIncome = getIncome;
