import {Request, Response} from "express";
import { insertUser } from "../models/signupModel";



export async function signup(request:Request, response:Response){
    let result = await insertUser(request.body)

    console.log(result.affectedRows);
    if(!result.affectedRows){
        response.writeHead(302,{
            "Content-Type" : "text/html; charset=UTF-8;",
            'Location' : 'http://localhost:3000/sign.html'
        })
        response.end();
    }else{
        
        response.writeHead(302,{
            "Content-Type" : "text/html; charset=UTF-8;",
            'Location' : 'http://localhost:3000/login.html'
        })
        response.end();
    }

    console.log(result)
}