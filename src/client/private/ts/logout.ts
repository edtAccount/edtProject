

/**
 * 로그아웃 섹션
 */
export async function clickLogoutBtnHandler(){
    const response = await fetch("/api/logout", {
        method: "POST",
    });

    if(response.redirected == true){
        alert("로그아웃 되었습니다.");
        
        location.href = response.url;
    }
}
