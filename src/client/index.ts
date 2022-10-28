const reportMenuContainer = document.getElementById("report-menu-container")

//수입 지출 입력 관련 element
const activeTypeEl = document.querySelector("#type") as HTMLSelectElement

const actualDateEl = document.getElementById("date") as HTMLInputElement
const incomeOptionsEl = document.getElementById("income-options") as HTMLSelectElement
const expenseOptionsEl = document.getElementById("expense-options") as HTMLSelectElement
const incomeOptionsSelectEl = document.querySelector("#income-options > select") as HTMLSelectElement
const expenseOptionsSelectEl = document.querySelector("expense-options > select") as HTMLSelectElement
const amountInputEl = document.getElementById("amount") as HTMLInputElement
const contentInputEl = document.getElementById("content") as HTMLInputElement

const submitBtn = document.querySelector(".submit-btn")


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
        await fetch("api/income", {
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


async function presentAccount(){
    //userNum은 서버에서 req 확인 후 처리, 클라이언트쪽 파라미터에서xxxx
    let result = await fetch("api/incomes")
    let jsonData = await result.json()
}
