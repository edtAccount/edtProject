"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.privatePageValidate = exports.publicPageValidate = void 0;
function publicPageValidate(request, response, next) {
    var _a;
    if (((_a = request.cookies) === null || _a === void 0 ? void 0 : _a.username) != null) {
        console.log("이미 로그인 되어있습니다.");
        response.redirect(302, 'http://localhost:3000/');
        response.end();
        return;
    }
    next();
}
exports.publicPageValidate = publicPageValidate;
function privatePageValidate(request, response, next) {
    var _a;
    if (((_a = request.cookies) === null || _a === void 0 ? void 0 : _a.username) == null) {
        console.log("로그인이 필요합니다.");
        response.redirect(302, 'http://localhost:3000/login');
        response.end();
        return;
    }
    next();
}
exports.privatePageValidate = privatePageValidate;
