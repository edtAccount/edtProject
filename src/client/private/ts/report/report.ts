import "../css/report.css";


const incomeReport =  document.querySelector(".income-report")
const expenseReport =  document.querySelector(".expense-report")


const selectYearEl = document.getElementById("year") as HTMLSelectElement
const selectYear = selectYearEl.options.selectedIndex
const selectMonthEl = document.getElementById("month") as HTMLSelectElement
const selectedMonth = selectMonthEl.options[selectMonthEl.options.selectedIndex].innerText


interface OptionData{
    options: string;
    optionAmount: number;

}

interface TotalData{
    totalAmount: number;
}

selectMonthEl.addEventListener("change", (event:Event)=>{

    const newSelectedMonth = selectMonthEl.options[selectMonthEl.options.selectedIndex].innerText
    getIncomeReport(newSelectedMonth)
    getExpenseReport(newSelectedMonth)
})

function createOptionElement(data: OptionData){
    const optionLiEl = document.createElement("li");
    const tabDivEl = document.createElement("div");
    const amountDivEl = document.createElement("div");

    tabDivEl.textContent = data.options
    tabDivEl.classList.add("report-box-tab") 

    amountDivEl.textContent = `${Number(data.optionAmount).toLocaleString()}원`
    amountDivEl.classList.add("report-box-amount") 

    tabDivEl.append(amountDivEl)
    optionLiEl.append(tabDivEl)
    
    return optionLiEl;
}

function createTotalElement(data: TotalData){
    const optionLiEl = document.createElement("li");
    const tabDivEl = document.createElement("div");
    const amountDivEl = document.createElement("div");

    tabDivEl.textContent = "총계"
    tabDivEl.classList.add("report-box-tab") 

    amountDivEl.textContent = `${Number(data.totalAmount).toLocaleString()}원`
    amountDivEl.classList.add("report-box-amount") 

    tabDivEl.append(amountDivEl)
    optionLiEl.append(tabDivEl)
    
    return optionLiEl;
}


//카테고리별 소득금액
async function getIncomeReport(month:string){
    incomeReport.innerHTML=""
    const response = await fetch(`api/report/income/${month}`)
    const datas = await response.json()
    
    datas.forEach((data: OptionData) => {
        incomeReport.append(createOptionElement(data))
    });

    await getIncomeTotal(month)
}

//소득 총계
async function getIncomeTotal(month:string){
    const response = await fetch(`api/report/incomeTotal/${month}`)
    const datas = await response.json()
    datas.forEach((data: TotalData) => {
        incomeReport.append(createTotalElement(data))
    });
}

//카테고리별 소비금액
async function getExpenseReport(month:string){
    expenseReport.innerHTML=""
    const response = await fetch(`api/report/expense/${month}`)
    const datas = await response.json()
    
    datas.forEach((data: OptionData) => {
        expenseReport.append(createOptionElement(data))
    });
    await getExpenseTotal(month)
}

//소비 총계
async function getExpenseTotal(month:string){
    const response = await fetch(`api/report/expenseTotal/${month}`)
    const datas = await response.json()
    datas.forEach((data: TotalData) => {
        expenseReport.append(createTotalElement(data))
    });
}

//총 자산
async function getTotalAccount(month:string){
    const resExpense = await fetch(`api/report/expenseTotal/${month}`)
    const resIncome = await fetch(`api/report/incomeTotal/${month}`)
    const totalExpense = await resExpense.json()
    const totalIncome = await resIncome.json()

    const result = Number(totalIncome[0].totalAmount) - Number(totalExpense[0].totalAmount)
    const totalAccount = document.getElementById("total-account")
    totalAccount.textContent = result.toLocaleString()
} 


//매개변수로 날짜 섹션에서 가져온 month 파라미터 입력 : 기본값 - 이번달
getIncomeReport(selectedMonth)
getExpenseReport(selectedMonth)
getTotalAccount(selectedMonth)


