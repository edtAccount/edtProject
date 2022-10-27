"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRequired = void 0;
const path = require("path");
function loginRequired(req, res, next) {
    var _a;
    try {
        //request 헤더의 쿠키 체크
        console.log(req.headers);
        const userCookie = (_a = req.headers.cookie) !== null && _a !== void 0 ? _a : "null";
        if (userCookie !== null) {
            console.log(path.join(__dirname, '..', '..', 'public', 'index'));
            res.redirect(path.join(__dirname, '..', '..', 'public', 'index.html'));
            //res.status(404).send("유저만 접근 가능한 기능입니다.")
            return;
        }
        //있으면 db에 존재하는 정보와 동일한지 체크 하고 다음 함수 실행
        next();
    }
    catch (error) {
        console.log(error);
    }
}
exports.loginRequired = loginRequired;
