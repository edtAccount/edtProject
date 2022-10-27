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
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const loginModel_1 = require("../models/loginModel");
// const result = {
//     post_result : async (request, response, )
// }
function login(request, response) {
    var _a, _b, _c, _d, _e, _f, _g;
    return __awaiter(this, void 0, void 0, function* () {
        let result;
        console.log((_a = request.body) === null || _a === void 0 ? void 0 : _a.username);
        console.log((_b = request.body) === null || _b === void 0 ? void 0 : _b.userpwd);
        // 쿠키에 아이디 값이 저장되어있는지 확인 
        // checkCookie(request, response);
        // 입력한 아이디, 비밀번호 값 받기
        // 데이터에 일치하는 아이디가 있는지 알아보기 위해 Model 의 function 을 호출
        // 일치하지 않는다면 경고창 띄우고 종료 
        result = yield (0, loginModel_1.selectUser)((_c = request.body) === null || _c === void 0 ? void 0 : _c.username, (_d = request.body) === null || _d === void 0 ? void 0 : _d.userpwd);
        console.log(result);
        if (!result.length) {
            response.writeHead(302, {
                "Content-Type": "text/html; charset=UTF-8;",
                'Location': 'http://localhost:3000/login.html'
            });
            response.end();
        }
        else {
            console.log("true", (0, loginModel_1.selectUser)((_e = request.body) === null || _e === void 0 ? void 0 : _e.username, (_f = request.body) === null || _f === void 0 ? void 0 : _f.userpwd));
            // 일치한다면 쿠키에 아이디값 저장 후 200 status ( 새로고침은  client 쪽에서 하게 하자)
            response.writeHead(302, {
                "Content-Type": "text/html; charset=UTF-8;",
                "Set-Cookie": `${(_g = request.body) === null || _g === void 0 ? void 0 : _g.username}`,
                'Location': 'http://localhost:3000/'
            });
            response.end();
        }
    });
}
exports.login = login;
function checkCookie(request, response) {
    const cookies = parseCookies(request.headers.cookie);
    if (cookies.username == null) {
        response.writeHead(302, {
            "Content-Type": "text/html; charset=UTF-8;",
            'Location': 'http://localhost:3000/index.html'
        });
        response.end();
        return;
    }
}
const parseCookies = (cookie = '') => {
    console.log("cookie : ", cookie);
    return cookie
        .split(';')
        .map(v => v.split('='))
        .map(([k, ...vs]) => [k, vs.join('=')])
        .reduce((acc, [k, v]) => {
        acc[k.trim()] = decodeURIComponent(v);
        return acc;
    }, {});
};
