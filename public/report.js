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
const incomeReport = document.querySelector(".income-report");
const expenseReport = document.querySelector(".expense-report");
function createOptionElement(data) {
    const optionLiEl = document.createElement("li");
    const tabDivEl = document.createElement("div");
    const amountDivEl = document.createElement("div");
    tabDivEl.textContent = data.options;
    tabDivEl.classList.add("report-box-tab");
    amountDivEl.textContent = `${data.optionAmount}원`;
    amountDivEl.classList.add("report-box-amount");
    tabDivEl.append(amountDivEl);
    optionLiEl.append(tabDivEl);
    return optionLiEl;
}
function getIncomeReport() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("api/report/income");
        console.log(response);
        const datas = yield response.json();
        datas.forEach((data) => {
            incomeReport.append(createOptionElement(data));
        });
    });
}
function getExpenseReport() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("api/report/expense");
        console.log(response);
        const datas = yield response.json();
        datas.forEach((data) => {
            expenseReport.append(createOptionElement(data));
        });
    });
}
getIncomeReport();
getExpenseReport();
