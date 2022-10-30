var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import "../css/index.css";
const reportMenuContainer = document.getElementById("report-menu-container");
//로그아웃 element
const logoutBtn = document.querySelector("#logout-menu-container");
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
//메인 내역 element
const dateInputEl = document.getElementById("date-input");
logoutBtn === null || logoutBtn === void 0 ? void 0 : logoutBtn.addEventListener("click", clickLogoutBtnHandler);
//메인
document.addEventListener("DOMContentLoaded", () => __awaiter(void 0, void 0, void 0, function* () {
    initDate();
    //initInputType() 
    yield submitAccountForm();
}));
/**
 * 수입지출 입력 섹션
 */
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
function submitAccountForm() {
    return __awaiter(this, void 0, void 0, function* () {
        initInputType();
        submitBtn.addEventListener("click", submitAccountFormHdr);
        yield initAccount();
    });
}
function submitAccountFormHdr() {
    return __awaiter(this, void 0, void 0, function* () {
        const actualDate = actualDateEl.value;
        const options = isIncomeTypeTitle(activeTypeEl) ?
            incomeOptionsSelectEl.options[incomeOptionsSelectEl.options.selectedIndex].innerText
            : expenseOptionsSelectEl.options[expenseOptionsSelectEl.options.selectedIndex].innerText;
        const amount = amountInputEl.value;
        const content = contentInputEl.value;
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
        yield initAccount();
    });
}
/**
 * 로그아웃 섹션
 */
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
/**
 * 메인 내역 섹션
 */
export const tableContainertEl = document.querySelector("#breakdown-container");
export const breakdownIncomeEl = document.querySelector("#breakdown-income");
export const breakdownExpenseEl = document.querySelector("#breakdown-expense");
function initDate() {
    dateInputEl.value = new Date().toISOString().substring(0, 10);
}
function stringToDate(date) {
    const targetDate = new Date(date);
    const arrayDate = `${targetDate.getFullYear().toString()}-${(targetDate.getMonth() + 1).toString()}-${targetDate.getDate().toString()}`;
    return arrayDate;
}
function initAccount() {
    return __awaiter(this, void 0, void 0, function* () {
        tableContainertEl.innerHTML = "";
        const IncomeEl = yield presentAccountElByType("income");
        const expenseEl = yield presentAccountElByType("expense");
        tableContainertEl.append(IncomeEl, expenseEl);
    });
}
function presentAccountElByType(type) {
    return __awaiter(this, void 0, void 0, function* () {
        const tableAccount = document.createElement("div");
        console.log(dateInputEl.value);
        let result = yield fetch(`api/${type}s`);
        //let result = await fetch(`api/${type}s?${dateInputEl.value}`)
        let datas = yield result.json();
        datas.forEach((data) => {
            const tableEl = createAccountEl(type, data);
            tableAccount.append(tableEl);
        });
        return tableAccount;
    });
}
function createAccountEl(type, data) {
    const tableEl = document.createElement("table");
    tableEl.classList.add("breakdown");
    tableEl.classList.add(type == "income" ? "income-breakdown" : "expense-breakdown");
    //테이블 header
    const tableBodyEl = document.createElement("tbody");
    tableEl.setAttribute('id', data.id);
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
    const tableOptionsEl = document.createElement("td");
    const tableContentEl = document.createElement("td");
    const tableAmountEl = document.createElement("td");
    tableDateEl.textContent = stringToDate(data.actualDate);
    tableOptionsEl.textContent = data.options;
    tableContentEl.textContent = data.content;
    tableAmountEl.textContent = data.amount.toLocaleString();
    tableValueEl.append(tableDateEl, tableOptionsEl, tableContentEl, tableAmountEl);
    //삭제버튼
    const tableDelBtn = document.createElement("button");
    tableDelBtn.innerText = "삭제";
    tableDelBtn.onclick = (event) => __awaiter(this, void 0, void 0, function* () {
        event.stopPropagation();
        const delElId = tableDelBtn.closest("table").getAttribute("id");
        yield fetch(`api/${type}/${delElId}`, {
            method: "DELETE",
        });
        yield initAccount();
    });
    tableBodyEl.append(tableHeaderEl, tableValueEl, tableDelBtn);
    tableEl.append(tableBodyEl);
    return tableEl;
}
dateInputEl.addEventListener("change", () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(dateInputEl.value);
    const actualDate = dateInputEl.value;
    let result = yield fetch(`api/incomes/${actualDate}`);
}));
