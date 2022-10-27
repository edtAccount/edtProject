import express, {Request, Response} from "express";

// import {router} from "./routers/router"
import {loginRouter} from "./routers/loginRouter"
const app = express();

app.use(express.static("public"));
app.use(express.json())

// app.use(router)
app.use(loginRouter);


app.listen(3000, ()=>{
    console.log("listening to 3000")
})



