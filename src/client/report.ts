
const incomeReport =  document.querySelector(".income-report")
const expenseReport =  document.querySelector(".expense-report")

interface OptionData{
    options: string;
    optionAmount: number;

}

function createOptionElement(data: OptionData){
    const optionLiEl = document.createElement("li");
    const tabDivEl = document.createElement("div");
    const amountDivEl = document.createElement("div");

    tabDivEl.textContent = data.options
    tabDivEl.classList.add("report-box-tab") 

    amountDivEl.textContent = `${data.optionAmount}원`
    amountDivEl.classList.add("report-box-amount") 

    tabDivEl.append(amountDivEl)
    optionLiEl.append(tabDivEl)
    
    return optionLiEl;
}

async function getIncomeReport(){
    const response = await fetch("api/report/income")
    console.log(response)
    const datas = await response.json()
    datas.forEach((data: OptionData) => {
        incomeReport.append(createOptionElement(data))
    });
    
}

async function getExpenseReport(){
    const response = await fetch("api/report/expense")
    console.log(response)
    const datas = await response.json()
    datas.forEach((data: OptionData) => {
        expenseReport.append(createOptionElement(data))
    });
}

getIncomeReport()
getExpenseReport()