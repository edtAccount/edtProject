import express, {Request, Response} from "express"
import mysql from "mysql"


const app = express();

app.use(express.static("public"));
app.use(express.json())


//커넥트 옵션 
const connection = mysql.createConnection({
    //  사용할 DB 가 설치된 호스트의 IP
    host: '172.29.12.155',
    port: 3306,
    user: 'root',
    password: '1q2w3e4r',

    // 어떤 스키마를 사용할지 ?
    database: 'exercise',
})

//연결 완료
connection.connect()


app.get("/api/report",(req, res)=>{

    connection.query('select * from income_tbl', (err, rows)=>{
        if(err){
            throw err;
        }
        res.send(rows)
    })
})



app.listen(3000, ()=>{
    console.log("listening to 3000")
})