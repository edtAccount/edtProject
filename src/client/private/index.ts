
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
    id: number | null;
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

function stringToDate(date:Date){
    const targetDate = new Date(date);
    const arrayDate = `${targetDate.getFullYear().toString()}-${(targetDate.getMonth()+1).toString()}-${targetDate.getDate().toString()}`
    return arrayDate
}

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
        const tableBodyEl = document.createElement("tbody")
        tableBodyEl.setAttribute('id', data.id)
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
        const tableDateEl = document.createElement("td")
        tableDateEl.textContent = stringToDate(data.actualDate)
        const tableOptionsEl = document.createElement("td")
        tableOptionsEl.textContent = data.options
        const tableContentEl = document.createElement("td")
        tableContentEl.textContent = data.content
        const tableAmountEl = document.createElement("td")
        tableAmountEl.textContent = data.amount.toString()
        tableValueEl.append(tableDateEl, tableOptionsEl, tableContentEl, tableAmountEl)
        //삭제버튼
        const tableDelBtn = document.createElement("button")
        tableDelBtn.innerText = "X"
        tableDelBtn.onclick = async(event) => {
            const elId = tableDelBtn.parentElement.id
            await fetch(`api/income/${elId}`, {
                method: "DELETE",
            })
        }
        
        tableBodyEl.append(tableHeaderEl, tableValueEl, tableDelBtn)
        
        tableEl.append(tableBodyEl)

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

