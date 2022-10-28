let logoutBtn = document.querySelector("#logout-menu-container");

logoutBtn?.addEventListener("click", clickLogoutBtnHandler);

async function clickLogoutBtnHandler(){
    const response = await fetch("/api/logout", {
        method: "POST",
    });

    if(response.redirected == true){
        alert("로그아웃 되었습니다.");
        
        location.href = response.url;
    }
}