import { Request, Response } from "express";

export function logout(request:Request, response:Response){
    // 쿠키 사용!!
    // response.cookie("username", request.cookies.username, {
    //     maxAge: 0,
    // });
    // response.cookie("id", request.cookies.id, {
    //     maxAge: 0,
    // });
    // response.redirect(302, "http://localhost:3000/login");

    // 세션 사용!!!
    request.session.destroy(err => {
        if(err) throw err;

        response.cookie("id", request.cookies.id, {
            maxAge: 0,
        });

        response.redirect(302, "http://localhost:3000/login");
        response.end();
    });

}