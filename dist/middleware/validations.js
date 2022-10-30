"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.privatePageValidate = exports.publicPageValidate = void 0;
function publicPageValidate(request, response, next) {
    console.log(request.cookies);
    console.log(request.session);
    // 세션 사용!!!
    if (request.session.user) {
        console.log("이미 로그인 되어있습니다.");
        response.redirect(302, 'http://localhost:3000/');
        response.end();
        return;
    }
    // if(request.cookies?.username != null){
    //     console.log("이미 로그인 되어있습니다.")
    //     response.redirect(302, 'http://localhost:3000/')
    //     response.end();
    //     return;
    // }
    next();
}
exports.publicPageValidate = publicPageValidate;
function privatePageValidate(request, response, next) {
    console.log(request.cookies);
    console.log(request.session);
    if (!request.session.user) {
        console.log("로그인이 필요합니다.");
        response.redirect(302, 'http://localhost:3000/login');
        response.end();
        return;
    }
    // if(request.cookies?.username == null){
    //     console.log("로그인이 필요합니다.");
    //     response.redirect(302, 'http://localhost:3000/login')
    //     response.end();
    //     return;
    // }
    next();
}
exports.privatePageValidate = privatePageValidate;
