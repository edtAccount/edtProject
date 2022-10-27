import express  from "express"
import {reportRouter} from "./routers/reportRouter"

const path = require("path")
const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//라우터 등록
app.use("/api", reportRouter)


app.listen(3000, ()=>{
    console.log("listening to 3000")
})