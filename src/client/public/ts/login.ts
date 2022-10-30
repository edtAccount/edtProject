import "../css/login.css";

const username = document.querySelector("#username") as HTMLInputElement;
const userpwd = document.querySelector("#userpwd")  as HTMLInputElement;
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
    const response = await fetch("/api/login", {
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

    console.log(response)
    console.log(response.redirected);
    
    if(response.redirected == true){
        location.href = response.url;
    }else{
        alert("아이디 혹은 비밀번호가 올바르지 않습니다.");
    }
}