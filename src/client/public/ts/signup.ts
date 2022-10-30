import "../css/signup.css";

const fullname = document.querySelector("#fullname") as HTMLInputElement;
const username = document.querySelector("#username") as HTMLInputElement;
const userpwd = document.querySelector("#userpwd")  as HTMLInputElement;
const signupBtn = document.querySelector("#signupBtn");

signupBtn.addEventListener("click", clickSignBtnHandler);

function clickSignBtnHandler(){
    if(!fullname.value || !username.value || !userpwd.value){
        alert("입력란을 채워주세요.");
        return;
    }

    sendRequestForSignUp();

}

async function sendRequestForSignUp(){
    console.log(fullname.value);
    console.log(username.value);
    console.log(userpwd.value)
    const response = await fetch("/api/signup", {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            fullname: fullname.value,
            username:  username.value,
            userpwd: userpwd.value,
        })
    })

    username.value = '';
    userpwd.value = '';
    username.focus();


    if(response.redirected == true){
        alert("회원가입 되었습니다.");

        location.href = response.url;
    }else{
        alert("중복된 아이디 입니다.");
    }
}