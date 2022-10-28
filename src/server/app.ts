import express, {Request, Response} from "express"
import {reportRouter} from "./routers/reportRouter"
import {indexRouter} from "./routers/indexRouter"

const path = require("path")
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static("public"));


//라우터 등록
app.use("/api", reportRouter, indexRouter)


//테스트 코드
app.get("/report", (req:Request,res:Response)=>{

        const filename = req.url.split("/")[1]
        res.sendFile(path.join(__dirname,'..','public',filename+".html"))
})

//`./${filename}.html`

app.listen(3000, ()=>{
    console.log("listening to 3000")
})