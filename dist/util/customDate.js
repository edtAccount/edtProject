"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringToDate = void 0;
function stringToDate(date) {
    const targetDate = new Date(date);
    const arrayDate = `${targetDate.getFullYear().toString()}-${(targetDate.getMonth() + 1).toString()}-${targetDate.getDate().toString()}`;
    return arrayDate;
}
exports.stringToDate = stringToDate;
