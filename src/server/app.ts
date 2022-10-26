import express, {Request, Response} from "express"
import {router} from "./routers/router"
const app = express();

app.use(express.static("views"));
app.use(express.json())

app.use(router)


app.listen(3000, ()=>{
    console.log("listening to 3000")
})