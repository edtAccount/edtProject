import {NextFunction, Request, Response} from "express";

export function publicPageValidate(request:Request, response:Response, next:NextFunction){

    if(request.cookies?.username != null){
        console.log("이미 로그인 되어있는 계정입니다.")
        response.redirect(302, 'http://localhost:3000/')
        response.end();
        return;
    }

    next();

}

export function privatePageValidate(request:Request, response:Response, next:NextFunction){
    
    if(request.cookies?.username == null){
        console.log("로그인을 해야합니다.")
        response.redirect(302, 'http://localhost:3000/login')

        response.end();
        return;
    }

    next();
}