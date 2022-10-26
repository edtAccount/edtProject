import express from "express"
import {router} from "./routers/router"
const app = express();

app.use(express.static("public"));
//app.use('/js', express.static('public/js'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//라우터 등록
app.use("/api",router)


app.listen(3000, ()=>{
    console.log("listening to 3000")
})