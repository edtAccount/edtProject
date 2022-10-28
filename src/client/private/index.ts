import {stringToDate} from "../../server/util/customDate"

//로그아웃 element
const logoutBtn = document.querySelector("#logout-menu-container");

//메인 내역 관련 element
const tableContainertEl = document.querySelector("#breakdown-container")

//수입 지출 입력 관련 element
const activeTypeEl = document.querySelector("#type") as HTMLSelectElement

const actualDateEl = document.getElementById("date") as HTMLInputElement
const incomeOptionsEl = document.getElementById("income-options") as HTMLSelectElement
const expenseOptionsEl = document.getElementById("expense-options") as HTMLSelectElement
const incomeOptionsSelectEl = document.querySelector("#income-options > select") as HTMLSelectElement
const expenseOptionsSelectEl = document.querySelector("#expense-options > select") as HTMLSelectElement
const amountInputEl = document.getElementById("amount") as HTMLInputElement
const contentInputEl = document.getElementById("content") as HTMLInputElement

const submitBtn = document.querySelector(".submit-btn")


interface AccountInfo {
    userNum: number | null;
    amount: number | null;
    options: string | null;
    content: string | null;
    actualDate: Date | null;
}



logoutBtn?.addEventListener("click", clickLogoutBtnHandler);


document.addEventListener("DOMContentLoaded", async ()=>{
    initInputType()
    await submitAccountForm()
})

function initInputType(){

    isIncomeTypeTitle(activeTypeEl) ? (incomeOptionsEl.hidden = false) : (expenseOptionsEl.hidden = false)
    
    activeTypeEl.onchange = () => {
        if(isIncomeTypeTitle(activeTypeEl)) {
            incomeOptionsEl.hidden = false
            expenseOptionsEl.hidden = true
        }else{
            incomeOptionsEl.hidden = true
            expenseOptionsEl.hidden = false
        }
    }
}

function isIncomeTypeTitle(activeTypeEl: HTMLSelectElement){
    return (activeTypeEl.options[activeTypeEl.options.selectedIndex].innerText === "수입")
}

// function getOptionTitleByType(activeTypeEl: HTMLSelectElement){
//     return 
// }

async function submitAccountForm(){

    await presentAccount()

    submitBtn.addEventListener("click", async()=>{
        // if (isIncomeTypeTitle(activeTypeEl)){
            const actualDate = actualDateEl.value;
            const options = isIncomeTypeTitle(activeTypeEl) ? 
                incomeOptionsSelectEl.options[incomeOptionsSelectEl.options.selectedIndex].innerText 
                : expenseOptionsSelectEl.options[expenseOptionsSelectEl.options.selectedIndex].innerText
            const amount = amountInputEl.value
            const content = contentInputEl.value
        // }
        const bodyData = {
            "actualDate": actualDate,
            "options": options,
            "amount": amount,
            "content": content,
        }
        isIncomeTypeTitle(activeTypeEl) ? 
        await fetch("api/income", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(bodyData)
        })
        :
        await fetch("api/expense", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(bodyData)
        })

        amountInputEl.value = ""
        contentInputEl.value = ""

    })    
}

function createIncomeElement(data: AccountInfo){
    const accountEl = document.createElement("div")
    accountEl.textContent = stringToDate(data.actualDate)
    tableContainertEl.append(accountEl)
}

async function presentAccount(){
    //userNum은 서버에서 req 확인 후 처리, 클라이언트쪽 파라미터에서xxxx
    let result = await fetch("api/incomes")
    let datas = await result.json()

    datas.forEach((data: AccountInfo) => {
        const tableEl = document.createElement("table")
        tableEl.classList.add("breakdown")
        // const tableValueEl = document.createElement("tr")
        // tableValueEl.classList.add("table-value")
        // tableHeaderAmountEl.classList.add("header-form")
        //테이블 header
        const tableHeaderEl = document.createElement("tr")
        const tableHeaderDateEl = document.createElement("th").innerText = "날짜"
        const tableHeaderOptionsEl = document.createElement("th").innerText = "분류"
        const tableHeaderContentEl = document.createElement("th").innerText = "내용"
        const tableHeaderAmountEl = document.createElement("th").innerText = "금액"
        tableHeaderEl.append(tableHeaderDateEl, tableHeaderOptionsEl, tableHeaderContentEl, tableHeaderAmountEl)
        //테이블 value
        const tableValueEl = document.createElement("tr")
        const tableDateEl = document.createElement("td").innerText = stringToDate(data.actualDate)
        const tableOptionsEl = document.createElement("td").innerText = data.options
        const tableContentEl = document.createElement("td").innerText = data.content
        const tableAmountEl = document.createElement("td").innerText = data.amount.toString()
        tableValueEl.append(tableDateEl, tableOptionsEl, tableContentEl, tableAmountEl)
        
        tableEl.append(tableHeaderEl, tableValueEl)

        tableContainertEl.append(tableEl)
    });
}


async function clickLogoutBtnHandler(){
    const response = await fetch("/api/logout", {
        method: "POST",
    });

    if(response.redirected == true){
        alert("로그아웃 되었습니다.");
        
        location.href = response.url;
    }
}

