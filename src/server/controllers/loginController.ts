import { Request, Response } from "express";
import * as bcrypt from "bcrypt";
import { selectUser } from "../models/loginModel";
import dotenv from "dotenv";
dotenv.config();


export async function login(request:Request, response:Response){

    let result = await selectUser(request.body?.username, request.body?.userpwd);
    if(!result.length){
        console.log("로그인 실패");
        
        response.end();
    }else{

        // 세션 사용!!!
        request.session.user = {
            id : result[0]["id"],
            name : request.body.username,
            password : bcrypt.hashSync(request.body.userpwd, 10),
            authorized: true,
        };

        // 쿠키 사용!!
        // response.cookie("username", request.body?.username, {
        //     maxAge:60*60*24,
        // });

        return request.session.save(() => {
            response.cookie("id", result[0].id, {
                maxAge:60*60*24,
            });
        
            response.redirect(302, "http://localhost:3000/");
        
            response.end();
        });
    }

}