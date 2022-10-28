import express, {Request, Response} from "express";
import cookieParser from "cookie-parser";
import path from "path"
import {indexRouter} from "./routers/indexRouter"
import {loginRouter} from "./routers/loginRouter"
import { logoutRouter } from "./routers/logoutRouter";
import {signupRouter} from "./routers/signupRouter";
import dotenv from "dotenv";
dotenv.config();


const app = express();

app.use(express.static(path.join(process.env.PUBLIC_PATH ,"img")));
app.use(express.static(path.join(process.env.PUBLIC_PATH,"js")));
app.use(express.static(path.join(process.env.PRIVATE_PATH,"img")));
app.use(express.static(path.join(process.env.PRIVATE_PATH,"js")));

app.use(cookieParser());
app.use(express.json());

app.use(indexRouter);
app.use(loginRouter);
app.use(logoutRouter);
app.use(signupRouter);


app.listen(3000, ()=>{
    console.log("listening to 3000")
})



