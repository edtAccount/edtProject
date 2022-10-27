import express, {Request, Response} from "express"
import {reportRouter} from "./routers/reportRouter"

const path = require("path")
const app = express();

app.use(express.static("public"));
console.log(path.join(__dirname,'..','public'))
//app.get("/report", express.static(path.join(__dirname,'..','public','report.html')))

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//라우터 등록
app.use("/api", reportRouter)

app.get("/report", (req:Request,res:Response)=>{
    console.log(req)
    const filename = req.url.split("/")[1]
    console.log(filename)
    res.sendFile((path.join(__dirname,'..','public',filename+".html"))
})

//`./${filename}.html`

app.listen(3000, ()=>{
    console.log("listening to 3000")
})