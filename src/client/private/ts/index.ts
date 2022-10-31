import "../css/index.css";
import {submitAccountForm} from "./submitForm"
import {clickLogoutBtnHandler} from "./logout"


const logoutBtn = document.querySelector("#logout-menu-container");


/**
 * 메인
 */
document.addEventListener("DOMContentLoaded", async ()=>{
    logoutBtn?.addEventListener("click", clickLogoutBtnHandler);
    await submitAccountForm()
})




