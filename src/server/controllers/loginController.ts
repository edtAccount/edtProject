import { Request, Response } from "express";
import { selectUser} from "../models/loginModel";
import dotenv from "dotenv";
dotenv.config();


export async function login(request:Request, response:Response){

    console.log(request.cookies);
    
    let result = await selectUser(request.body?.username, request.body?.userpwd);

    console.log(result)
    if(!result.length){
        console.log("로그인 실패");
        
        response.end();
    }else{
        response.cookie("username", request.body?.username, {
            maxAge:60*60*24,
        });
        response.cookie("id", result[0].id, {
            maxAge:60*60*24,
        });
 
        response.redirect(302, "http://localhost:3000/");
    
        response.end();
    }

}