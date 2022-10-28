"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = void 0;
function logout(request, response) {
    console.log(request.cookies);
    response.cookie("username", request.cookies.username, {
        maxAge: 0,
    });
    response.cookie("id", request.cookies.id, {
        maxAge: 0,
    });
    response.redirect(302, "http://localhost:3000/login");
    response.end();
}
exports.logout = logout;
