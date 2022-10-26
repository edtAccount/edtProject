
const getdataBtn =  document.getElementById("getdata")
const ulData =  document.getElementById("ulData")

getdataBtn.onclick = () => {
    getReport()
}

type Data = {
    options:string;
    content:string;
}


const getReport = async()=>{
    const response = await fetch("api/report")
    const datas = await response.json()
    datas.forEach((data:Data) => {
        const itemEl = document.createElement("li");
        itemEl.textContent = `${data.options} + ${data.content}`;

        ulData.append(itemEl)
    });

    return datas
}



