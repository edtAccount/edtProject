import express, {Request, Response} from "express";
import cookieParser from "cookie-parser";
import session from "express-session";
const FileStore = require('session-file-store')(session);
import path from "path"
import {indexRouter} from "./routers/indexRouter"
import {loginRouter} from "./routers/loginRouter"
import { logoutRouter } from "./routers/logoutRouter";
import {signupRouter} from "./routers/signupRouter";
import { reportRouter } from "./routers/reportRouter";
import dotenv from "dotenv";
dotenv.config();

const app = express();

// app.use(express.static(path.join(process.env.PUBLIC_PATH ,"img")));
app.use(express.static(path.join(process.env.PUBLIC_PATH, "js")));
// app.use(express.static(path.join(process.env.PUBLIC_PATH,"css")));
// app.use(express.static(path.join(process.env.PRIVATE_PATH,"img")));
app.use(express.static(path.join(process.env.PRIVATE_PATH, "js")));
// app.use(express.static(path.join(process.env.PRIVATE_PATH,"css")));

app.use(cookieParser());
app.use(session({
    secret: "secret key",
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
    },
    store: new FileStore(),
}))
app.use(express.json());

//라우터 등록
app.use(indexRouter);
app.use(loginRouter);
app.use(logoutRouter);
app.use(signupRouter);
app.use(reportRouter)




app.listen(3000, ()=>{
    console.log("listening to 3000")
})



