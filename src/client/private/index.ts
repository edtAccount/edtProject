
//로그아웃 element
const logoutBtn = document.querySelector("#logout-menu-container");


//수입 지출 입력 관련 element
const activeTypeEl = document.querySelector("#type") as HTMLSelectElement

const actualDateEl = document.getElementById("date") as HTMLInputElement
const incomeOptionsEl = document.getElementById("income-options") as HTMLSelectElement
const expenseOptionsEl = document.getElementById("expense-options") as HTMLSelectElement
const incomeOptionsSelectEl = document.querySelector("#income-options > select") as HTMLSelectElement
const expenseOptionsSelectEl = document.querySelector("#expense-options > select") as HTMLSelectElement
const amountInputEl = document.getElementById("amount") as HTMLInputElement
const contentInputEl = document.getElementById("content") as HTMLInputElement

const submitBtn = document.querySelector(".submit-btn") as HTMLButtonElement

//메인 내역 element
const dateInputEl= document.getElementById("date-input") as HTMLInputElement

interface AccountInfo {
    id: string | null;
    userNum: number | null;
    amount: number | null;
    options: string | null;
    content: string | null;
    actualDate: Date | null;
}


logoutBtn?.addEventListener("click", clickLogoutBtnHandler);


//메인
document.addEventListener("DOMContentLoaded", async ()=>{
    initDate()
    //initInputType() 
    await submitAccountForm()
})


/**
 * 수입지출 입력 섹션
 */
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


async function submitAccountForm(){

    initInputType()

    submitBtn.addEventListener("click", submitAccountFormHdr)    

    await initAccount()
}


async function submitAccountFormHdr(){
    const actualDate = actualDateEl.value;
    const options = isIncomeTypeTitle(activeTypeEl) ? 
        incomeOptionsSelectEl.options[incomeOptionsSelectEl.options.selectedIndex].innerText 
        : expenseOptionsSelectEl.options[expenseOptionsSelectEl.options.selectedIndex].innerText
    const amount = amountInputEl.value
    const content = contentInputEl.value

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

    await initAccount()
}




/**
 * 로그아웃 섹션
 */

async function clickLogoutBtnHandler(){
    const response = await fetch("/api/logout", {
        method: "POST",
    });

    if(response.redirected == true){
        alert("로그아웃 되었습니다.");
        
        location.href = response.url;
    }
}


/**
 * 메인 내역 섹션
 */
export const tableContainertEl = document.querySelector("#breakdown-container")
export const breakdownIncomeEl = document.querySelector("#breakdown-income")
export const breakdownExpenseEl = document.querySelector("#breakdown-expense")


function initDate() {
    
    dateInputEl.value = new Date().toISOString().substring(0, 10);;
}

function stringToDate(date:Date){
    const targetDate = new Date(date);
    const arrayDate = `${targetDate.getFullYear().toString()}-${(targetDate.getMonth()+1).toString()}-${targetDate.getDate().toString()}`
    return arrayDate
}


async function initAccount(){

    tableContainertEl.innerHTML = ""

    const IncomeEl = await presentAccountElByType("income")
    const expenseEl = await presentAccountElByType("expense")

    tableContainertEl.append(IncomeEl, expenseEl)

}

async function presentAccountElByType(type: string){
    const tableAccount = document.createElement("div")
    
    let result = await fetch(`api/${type}s`)
    let datas = await result.json()

    datas.forEach((data: AccountInfo) => {

        const tableEl = createAccountEl(type, data)
        tableAccount.append(tableEl)
        
    });
    return tableAccount
}


function createAccountEl(type:string, data: AccountInfo) {

    const tableEl = document.createElement("table")
    tableEl.classList.add("breakdown")
    tableEl.classList.add(type == "income" ? "income-breakdown" : "expense-breakdown")

    //테이블 header
    const tableBodyEl = document.createElement("tbody")
    tableEl.setAttribute('id', data.id)
    const tableHeaderEl = document.createElement("tr")
    const tableHeaderDateEl = document.createElement("th")
    tableHeaderDateEl.textContent = "날짜"
    const tableHeaderOptionsEl = document.createElement("th")
    tableHeaderOptionsEl.textContent = "분류"
    const tableHeaderContentEl = document.createElement("th")
    tableHeaderContentEl.textContent = "내용"
    const tableHeaderAmountEl = document.createElement("th")
    tableHeaderAmountEl.textContent = "금액"
    tableHeaderEl.append(tableHeaderDateEl, tableHeaderOptionsEl, tableHeaderContentEl, tableHeaderAmountEl)

    //테이블 value
    const tableValueEl = document.createElement("tr")

    const tableDateEl = document.createElement("td") as HTMLTableCellElement
    const tableOptionsEl = document.createElement("td") as HTMLTableCellElement
    const tableContentEl = document.createElement("td") as HTMLTableCellElement
    const tableAmountEl = document.createElement("td") as HTMLTableCellElement

    tableDateEl.textContent = stringToDate(data.actualDate)
    tableOptionsEl.textContent = data.options
    tableContentEl.textContent = data.content
    tableAmountEl.textContent = data.amount.toLocaleString()

    tableValueEl.append(tableDateEl, tableOptionsEl, tableContentEl, tableAmountEl)


    //삭제버튼
    const tableDelBtn = document.createElement("button")
    tableDelBtn.innerText = "삭제"
    tableDelBtn.onclick = async(event) => {
        event.stopPropagation()
        const delElId = tableDelBtn.closest("table").getAttribute("id")
        await fetch(`api/${type}/${delElId}`, {
            method: "DELETE",
        })
        await initAccount()
    }

    tableBodyEl.append(tableHeaderEl, tableValueEl, tableDelBtn)
        
    tableEl.append(tableBodyEl)

    return tableEl

}




dateInputEl.addEventListener("change", async() => {
    console.log(dateInputEl.value)
    const actualDate = dateInputEl.value
    let result = await fetch(`api/incomes/${actualDate}`)

})
