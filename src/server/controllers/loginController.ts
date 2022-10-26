import { Request, Response } from "express";

export function login(request:Request, response:Response){
    
    // 쿠키에 아이디 값이 저장되어있는지 확인 
    // checkCookie();
    
    // 입력한 아이디, 비밀번호 값 받기

    // 데이터에 일치하는 아이디가 있는지 알아보기 위해 Model 의 function 을 호출
    // Model.selectUserName();

    // 일치하는 데이터가 있으면 비밀번호에 대해서도 똑같이 진행
    // Model.selectUserPwd

    // 일치하지 않는다면 경고창 띄우고 종료 
    // if(!result){
    //     alert("아이디 혹은 비밀번호가 올바르지 않습니다.");
    //     return;
    // }

    // 일치한다면 쿠키에 아이디값 저장 후 200 status ( 새로고침은  client 쪽에서 하게 하자)
    // response.writeHead(200,{
    //     "Set-Cookie" : "UserName",
    // })
}