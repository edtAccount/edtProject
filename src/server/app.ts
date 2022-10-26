<<<<<<< Updated upstream
import "dotenv/config";
import express from 'express';
export const app = express();
=======
import express, {Request, Response} from "express"
import {router} from "./routers/router"
const app = express();
>>>>>>> Stashed changes

app.use(express.static("public"));
app.use(express.json())

<<<<<<< Updated upstream
app.listen(3000, ()=>{
    console.log("listening to 3000")
})

//커넥트 옵션 
// const connection = mysql.createConnection({
//     //  사용할 DB 가 설치된 호스트의 IP
//     host: '172.29.12.155',
//     port: 3306,
//     user: 'root',
//     password: '1q2w3e4r',

//     // 어떤 스키마를 사용할지 ?
//     database: 'exercise',
// })

//연결 완료
// connection.connect();


// app.get("/api/report",(request:Request, response:Response)=>{

//     connection.query('select * from income_tbl', (err, rows)=>{
//         if(err){
//             throw err;
//         }
//         response.send(rows)
//     })
// })
=======
app.use(router)
>>>>>>> Stashed changes


