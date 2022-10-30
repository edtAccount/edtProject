import {NextFunction, Request, Response} from "express";

export function publicPageValidate(request:Request, response:Response, next:NextFunction){
    console.log(request.cookies);
    console.log(request.session);

    // 세션 사용!!!
    if(request.session.user){
        console.log("이미 로그인 되어있습니다.")
        response.redirect(302, 'http://localhost:3000/')
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

export function privatePageValidate(request:Request, response:Response, next:NextFunction){
    console.log(request.cookies);
    console.log(request.session);

    if(!request.session.user){
        console.log("로그인이 필요합니다.");
        response.redirect(302, 'http://localhost:3000/login')
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