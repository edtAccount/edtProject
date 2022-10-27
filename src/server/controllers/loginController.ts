import { Request, Response } from "express";
import { selectUser} from "../models/loginModel";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

export async function login(request:Request, response:Response){

    let result = await selectUser(request.body?.username, request.body?.userpwd);
    console.log(result)
    if(!result.length){
        response.writeHead(302,{
            "Content-Type" : "text/html; charset=UTF-8;",
            'Location' : 'http://localhost:3000/login.html'
        })
        response.end();
    }else{
        console.log("true", selectUser(request.body?.username, request.body?.userpwd));
         // 일치한다면 쿠키에 아이디값 저장 후 200 status ( 새로고침은  client 쪽에서 하게 하자)
        response.writeHead(302,{
            "Content-Type" : "text/html; charset=UTF-8;",
            "Set-Cookie" : `${request.body?.username}`,
            'Location' : 'http://localhost:3000/'
        })
        response.end();
    }

}

export function validateLoginPage(request:Request, response:Response){

    const cookies = parseCookies(request.headers.cookie);

    if(cookies.username != null){

        response.writeHead(302,{
            "Content-Type" : "text/html; charset=UTF-8;",
            'Location' : 'http://localhost:3000/'
        })
        response.end();
        return;
    }else{
        let filePath = getFilePath(request);

        response.writeHead(200, {
            "Content-Type" : "text/html; charset=UTF-8"
        });
        response.end(fs.readFileSync(filePath))
    }
}


const parseCookies = ( cookie = '' ) => {
    console.log("cookie : ",cookie);
    return cookie
        .split(';')
        .map( v => v.split('=') )
        .map( ([k, ...vs]) => [k, vs.join('=')] )
        .reduce( (acc, [k,v]) => {
            acc[k.trim()] = decodeURIComponent(v);
            return acc;
        }, {});
}

function getFilePath(request:Request){
    let filePath;

    if(request.url == "/login") filePath = process.env.PUBLIC_PATH;
    filePath = path.join(process.env.PRIVATE_PATH, request.url)

    //확장자 얻기
    let extname = path.extname(filePath);

    if(!extname && extname != ".js"){
        const checkPaths = [`${filePath}.html`, path.join(filePath, "index.html")];
        
        for (const checkPath of checkPaths){
            if(fs.existsSync(checkPath)){
                filePath = checkPath;
                break;
            }
        }

    }else if(extname == ".js"){
        let checkPath = `${filePath}`;
        if(fs.existsSync(checkPath)){
            filePath = checkPath;
        }
    }
    
    if(!fs.existsSync(filePath)){
        return null;
    }
    
    return filePath;
}
function getLocation(request){

}

function getContentType(request) {

    let extname = path.extname(filePath);

    switch (extname) {
      case ".html":
        return "text/html; charset=utf-8";
      case ".js":
        return "text/javascript; charset=utf-8";
      default:
        break;
    }
}