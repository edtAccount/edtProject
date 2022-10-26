
const getdataBtn =  document.getElementById("getdata")
const ulData =  document.getElementById("ulData")

getdataBtn.onclick = async() => {
    await getReport()
}

type Data = {
    options:string;
    content:string;
}


const getReport = async()=>{
    const response = await fetch("api/report")
    console.log(response)
    const datas = await response.json()
    console.log(datas)
    datas.forEach((data:Data) => {
        const itemEl = document.createElement("li");
        itemEl.textContent = `${data.options} + ${data.content}`;
        console.log(data)

        ulData.append(itemEl)
    });

    return datas
}



