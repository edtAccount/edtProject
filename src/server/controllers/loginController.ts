import { Request, Response } from "express";
import { selectUser} from "../models/loginModel";

// const result = {
//     post_result : async (request, response, )
// }
export async function login(request:Request, response:Response){
    let result;
    console.log(request.body?.username)
    console.log(request.body?.userpwd)
    // 쿠키에 아이디 값이 저장되어있는지 확인 
    // checkCookie(request, response);
    // 입력한 아이디, 비밀번호 값 받기
    // 데이터에 일치하는 아이디가 있는지 알아보기 위해 Model 의 function 을 호출
    // 일치하지 않는다면 경고창 띄우고 종료 
    result = await selectUser(request.body?.username, request.body?.userpwd);
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

function checkCookie(request:Request, response:Response){
    const cookies = parseCookies(request.headers.cookie);

    if(cookies.username == null){
        response.writeHead(302,{
            "Content-Type" : "text/html; charset=UTF-8;",
            'Location' : 'http://localhost:3000/index.html'
        })
        response.end();
        return 
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