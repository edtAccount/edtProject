"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try {
            step(generator.next(value));
        }
        catch (e) {
            reject(e);
        } }
        function rejected(value) { try {
            step(generator["throw"](value));
        }
        catch (e) {
            reject(e);
        } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const fullname = document.querySelector("#fullname");
const username = document.querySelector("#username");
const userpwd = document.querySelector("#userpwd");
const signupBtn = document.querySelector("#signupBtn");
signupBtn.addEventListener("click", clickSignBtnHandler);
function clickSignBtnHandler() {
    if (!fullname.value || !username.value || !userpwd.value) {
        alert("입력란을 채워주세요.");
        return;
    }
    sendRequestForSignUp();
}
function sendRequestForSignUp() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(fullname.value);
        console.log(username.value);
        console.log(userpwd.value);
        const response = yield fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                fullname: fullname.value,
                username: username.value,
                userpwd: userpwd.value,
            })
        });
        username.value = '';
        userpwd.value = '';
        username.focus();
        location.href = response.url;
    });
}
