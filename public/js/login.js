"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const username = document.querySelector("#username");
const userpwd = document.querySelector("#userpwd");
const loginBtn = document.querySelector("#loginBtn");
loginBtn.addEventListener("click", clickLoginBtnHandler);
function clickLoginBtnHandler() {
    return __awaiter(this, void 0, void 0, function* () {
        if (!username.value || !userpwd.value) {
            alert("입력란을 채워주세요.");
            return;
        }
        sendRequestForLogin();
    });
}
function sendRequestForLogin() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(username.value);
        console.log(userpwd.value);
        const response = yield fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username.value,
                userpwd: userpwd.value,
            })
        });
        username.value = '';
        userpwd.value = '';
        username.focus();
        console.log(response);
        console.log(response.redirected);
        if (response.redirected == true) {
            location.href = response.url;
        }
        else {
            alert("아이디 혹은 비밀번호가 올바르지 않습니다.");
        }
    });
}
