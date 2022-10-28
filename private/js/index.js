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
//로그아웃 element
const logoutBtn = document.querySelector("#logout-menu-container");
//메인 내역 관련 element
const tableContainertEl = document.querySelector("#breakdown-container");
//수입 지출 입력 관련 element
const activeTypeEl = document.querySelector("#type");
const actualDateEl = document.getElementById("date");
const incomeOptionsEl = document.getElementById("income-options");
const expenseOptionsEl = document.getElementById("expense-options");
const incomeOptionsSelectEl = document.querySelector("#income-options > select");
const expenseOptionsSelectEl = document.querySelector("#expense-options > select");
const amountInputEl = document.getElementById("amount");
const contentInputEl = document.getElementById("content");
const submitBtn = document.querySelector(".submit-btn");
logoutBtn === null || logoutBtn === void 0 ? void 0 : logoutBtn.addEventListener("click", clickLogoutBtnHandler);
document.addEventListener("DOMContentLoaded", () => __awaiter(void 0, void 0, void 0, function* () {
    initInputType();
    yield submitAccountForm();
}));
function stringToDate(date) {
    const targetDate = new Date(date);
    const arrayDate = `${targetDate.getFullYear().toString()}-${(targetDate.getMonth() + 1).toString()}-${targetDate.getDate().toString()}`;
    return arrayDate;
}
function initInputType() {
    isIncomeTypeTitle(activeTypeEl) ? (incomeOptionsEl.hidden = false) : (expenseOptionsEl.hidden = false);
    activeTypeEl.onchange = () => {
        if (isIncomeTypeTitle(activeTypeEl)) {
            incomeOptionsEl.hidden = false;
            expenseOptionsEl.hidden = true;
        }
        else {
            incomeOptionsEl.hidden = true;
            expenseOptionsEl.hidden = false;
        }
    };
}
function isIncomeTypeTitle(activeTypeEl) {
    return (activeTypeEl.options[activeTypeEl.options.selectedIndex].innerText === "수입");
}
// function getOptionTitleByType(activeTypeEl: HTMLSelectElement){
//     return 
// }
function submitAccountForm() {
    return __awaiter(this, void 0, void 0, function* () {
        yield presentAccount();
        submitBtn.addEventListener("click", () => __awaiter(this, void 0, void 0, function* () {
            // if (isIncomeTypeTitle(activeTypeEl)){
            const actualDate = actualDateEl.value;
            const options = isIncomeTypeTitle(activeTypeEl) ?
                incomeOptionsSelectEl.options[incomeOptionsSelectEl.options.selectedIndex].innerText
                : expenseOptionsSelectEl.options[expenseOptionsSelectEl.options.selectedIndex].innerText;
            const amount = amountInputEl.value;
            const content = contentInputEl.value;
            // }
            const bodyData = {
                "actualDate": actualDate,
                "options": options,
                "amount": amount,
                "content": content,
            };
            isIncomeTypeTitle(activeTypeEl) ?
                yield fetch("api/income", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(bodyData)
                })
                :
                    yield fetch("api/expense", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(bodyData)
                    });
            amountInputEl.value = "";
            contentInputEl.value = "";
        }));
    });
}
function createIncomeElement(data) {
    const accountEl = document.createElement("div");
    accountEl.textContent = stringToDate(data.actualDate);
    tableContainertEl.append(accountEl);
}
function presentAccount() {
    return __awaiter(this, void 0, void 0, function* () {
        //userNum은 서버에서 req 확인 후 처리, 클라이언트쪽 파라미터에서xxxx
        let result = yield fetch("api/incomes");
        let datas = yield result.json();
        datas.forEach((data) => {
            const tableEl = document.createElement("table");
            tableEl.classList.add("breakdown");
            // const tableValueEl = document.createElement("tr")
            // tableValueEl.classList.add("table-value")
            // tableHeaderAmountEl.classList.add("header-form")
            //테이블 header
            const tableBodyEl = document.createElement("tbody");
            tableBodyEl.setAttribute('id', data.id);
            const tableHeaderEl = document.createElement("tr");
            const tableHeaderDateEl = document.createElement("th");
            tableHeaderDateEl.textContent = "날짜";
            const tableHeaderOptionsEl = document.createElement("th");
            tableHeaderOptionsEl.textContent = "분류";
            const tableHeaderContentEl = document.createElement("th");
            tableHeaderContentEl.textContent = "내용";
            const tableHeaderAmountEl = document.createElement("th");
            tableHeaderAmountEl.textContent = "금액";
            tableHeaderEl.append(tableHeaderDateEl, tableHeaderOptionsEl, tableHeaderContentEl, tableHeaderAmountEl);
            //테이블 value
            const tableValueEl = document.createElement("tr");
            const tableDateEl = document.createElement("td");
            tableDateEl.textContent = stringToDate(data.actualDate);
            const tableOptionsEl = document.createElement("td");
            tableOptionsEl.textContent = data.options;
            const tableContentEl = document.createElement("td");
            tableContentEl.textContent = data.content;
            const tableAmountEl = document.createElement("td");
            tableAmountEl.textContent = data.amount.toString();
            tableValueEl.append(tableDateEl, tableOptionsEl, tableContentEl, tableAmountEl);
            //삭제버튼
            const tableDelBtn = document.createElement("button");
            tableDelBtn.innerText = "X";
            tableDelBtn.onclick = (event) => __awaiter(this, void 0, void 0, function* () {
                const elId = tableDelBtn.parentElement.id;
                yield fetch(`api/income/${elId}`, {
                    method: "DELETE",
                });
            });
            tableBodyEl.append(tableHeaderEl, tableValueEl, tableDelBtn);
            tableEl.append(tableBodyEl);
            tableContainertEl.append(tableEl);
        });
    });
}
function clickLogoutBtnHandler() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("/api/logout", {
            method: "POST",
        });
        if (response.redirected == true) {
            alert("로그아웃 되었습니다.");
            location.href = response.url;
        }
    });
}
