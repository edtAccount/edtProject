import {AccountInfo} from "./interface"

/**
 * 메인 내역 섹션
 */
export const tableContainertEl = document.querySelector("#breakdown-container")
export const breakdownIncomeEl = document.querySelector("#breakdown-income")
export const breakdownExpenseEl = document.querySelector("#breakdown-expense")


function stringToDate(date:Date){
    const targetDate = new Date(date);
    const arrayDate = `${targetDate.getFullYear().toString()}-${(targetDate.getMonth()+1).toString()}-${targetDate.getDate().toString()}`
    return arrayDate
}


async function presentAccountElByType(type: string){
    const tableAccount = document.createElement("div")
    // console.log(dateInputEl.value)
    let result = await fetch(`api/${type}s`)
    //let result = await fetch(`api/${type}s?${dateInputEl.value}`)
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
    tableEl.setAttribute('id', data.ID)
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


export async function initAccount(){

    tableContainertEl.innerHTML = ""

    const IncomeEl = await presentAccountElByType("income")
    const expenseEl = await presentAccountElByType("expense")

    tableContainertEl.append(IncomeEl, expenseEl)

}