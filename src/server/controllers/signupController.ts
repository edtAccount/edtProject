import {Request, Response} from "express";

import { insertUser } from "../models/signupModel";



export async function signup(request:Request, response:Response){

    let result = await insertUser(request.body)

    console.log(result.affectedRows);
    if(!result.affectedRows){
        console.log("회원가입 실패")
        response.end();
    }else{
        response.redirect(302, "http://localhost:3000/login");

        response.end();
    }

    console.log(result)
}