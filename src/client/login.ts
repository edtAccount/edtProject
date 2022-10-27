const username = document.querySelector("#username");
const userpwd = document.querySelector("#userpwd");
const loginBtn = document.querySelector("#loginBtn");

loginBtn.addEventListener("click", clickLoginBtnHandler);

async function clickLoginBtnHandler(){
    if(!username.value || !userpwd.value){
        alert("입력란을 채워주세요.");
        return;
    }

    sendRequestForLogin();

}

async function sendRequestForLogin(){
    console.log(username.value);
    console.log(userpwd.value)
    const response = await fetch("/login", {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username:  username.value,
            userpwd: userpwd.value,
        })
    })

    username.value = '';
    userpwd.value = '';
    username.focus();

    console.log(response.url)
    console.log(response.url)
    console.log(response.url)
    console.log(response.url)
    console.log(response.url)
    location.href = response.url;
}