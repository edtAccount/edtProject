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
const selectYearEl = document.getElementById("year");
const selectYear = selectYearEl.options.selectedIndex;
const selectMonthEl = document.getElementById("month");
const selectedMonth = selectMonthEl.options[selectMonthEl.options.selectedIndex].innerText;
selectMonthEl.addEventListener("change", (event) => {
    const newSelectedMonth = selectMonthEl.options[selectMonthEl.options.selectedIndex].innerText;
    getIncomeReport(newSelectedMonth);
    getExpenseReport(newSelectedMonth);
});
function createOptionElement(data) {
    const optionLiEl = document.createElement("li");
    const tabDivEl = document.createElement("div");
    const amountDivEl = document.createElement("div");
    tabDivEl.textContent = data.options;
    tabDivEl.classList.add("report-box-tab");
    amountDivEl.textContent = `${Number(data.optionAmount).toLocaleString()}원`;
    amountDivEl.classList.add("report-box-amount");
    tabDivEl.append(amountDivEl);
    optionLiEl.append(tabDivEl);
    return optionLiEl;
}
function createTotalElement(data) {
    const optionLiEl = document.createElement("li");
    const tabDivEl = document.createElement("div");
    const amountDivEl = document.createElement("div");
    tabDivEl.textContent = "총계";
    tabDivEl.classList.add("report-box-tab");
    amountDivEl.textContent = `${Number(data.totalAmount).toLocaleString()}원`;
    amountDivEl.classList.add("report-box-amount");
    tabDivEl.append(amountDivEl);
    optionLiEl.append(tabDivEl);
    return optionLiEl;
}
//카테고리별 소득금액
function getIncomeReport(month) {
    return __awaiter(this, void 0, void 0, function* () {
        incomeReport.innerHTML = "";
        const response = yield fetch(`api/report/income/${month}`);
        const datas = yield response.json();
        datas.forEach((data) => {
            incomeReport.append(createOptionElement(data));
        });
        yield getIncomeTotal(month);
    });
}
//소득 총계
function getIncomeTotal(month) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`api/report/incomeTotal/${month}`);
        const datas = yield response.json();
        datas.forEach((data) => {
            incomeReport.append(createTotalElement(data));
        });
    });
}
//카테고리별 소비금액
function getExpenseReport(month) {
    return __awaiter(this, void 0, void 0, function* () {
        expenseReport.innerHTML = "";
        const response = yield fetch(`api/report/expense/${month}`);
        const datas = yield response.json();
        datas.forEach((data) => {
            expenseReport.append(createOptionElement(data));
        });
        yield getExpenseTotal(month);
    });
}
//소비 총계
function getExpenseTotal(month) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`api/report/expenseTotal/${month}`);
        const datas = yield response.json();
        datas.forEach((data) => {
            expenseReport.append(createTotalElement(data));
        });
    });
}
//총 자산
function getTotalAccount(month) {
    return __awaiter(this, void 0, void 0, function* () {
        const resExpense = yield fetch(`api/report/expenseTotal/${month}`);
        const resIncome = yield fetch(`api/report/incomeTotal/${month}`);
        const totalExpense = yield resExpense.json();
        const totalIncome = yield resIncome.json();
        const result = Number(totalIncome[0].totalAmount) - Number(totalExpense[0].totalAmount);
        const totalAccount = document.getElementById("total-account");
        totalAccount.textContent = result.toLocaleString();
    });
}
//매개변수로 날짜 섹션에서 가져온 month 파라미터 입력 : 기본값 - 이번달
getIncomeReport(selectedMonth);
getExpenseReport(selectedMonth);
getTotalAccount(selectedMonth);
