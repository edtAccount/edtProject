"use strict";
const incomeMenu =  document.querySelector(".income-menu")
const expenseMenu =  document.querySelector(".expense-menu")



const getReport = async()=>{
    const response = await fetch("api/report/income")
    console.log(response)
    const datas = await response.json()
    console.log(datas)
    datas.forEach((data) => {
        const listEl = document.createElement("li");
        const titleDivEl = document.createElement("div");
        const amountDivEl = document.createElement("div");

        titleDivEl.textContent = data.options
        titleDivEl.classList.add("menu-box-tab") 
        // menu-box block
        amountDivEl.textContent = `${data.optionAmount}원`
        amountDivEl.classList.add("menu-box-number") 

        titleDivEl.append(amountDivEl)
        listEl.append(titleDivEl)


        incomeMenu.append(listEl)
    });


    const response = await fetch("api/report/expense")
    console.log(response)
    const datas = await response.json()
    console.log(datas)
    datas.forEach((data) => {
        const listEl = document.createElement("li");
        const titleDivEl = document.createElement("div");
        const amountDivEl = document.createElement("div");

        titleDivEl.textContent = data.options
        titleDivEl.classList.add("menu-box-tab") 
        // menu-box block
        amountDivEl.textContent = `${data.optionAmount}원`
        amountDivEl.classList.add("menu-box-number") 

        titleDivEl.append(amountDivEl)
        listEl.append(titleDivEl)


        expenseMenu.append(listEl)
    });
}

getReport()
