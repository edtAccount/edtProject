const fullname = document.querySelector("#fullname");
const username = document.querySelector("#username");
const userpwd = document.querySelector("#userpwd");
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
    const response = await fetch("/signup", {
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

    location.href = response.url;
}