import { Request, Response } from "express";

export function logout(request:Request, response:Response){

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