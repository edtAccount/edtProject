"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = void 0;
function logout(request, response) {
    return request.session.save(() => {
        request.session.destroy(err => {
            if (err)
                throw err;
            response.cookie("id", request.cookies.id, {
                maxAge: 0,
            });
            response.redirect(302, "http://localhost:3000/login");
            response.end();
        });
    });
}
exports.logout = logout;
