import { Request, Response } from "express";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();

export function getPublicFileResource(request:Request, response:Response){
    let extension = ".html";
    let fileName = ""
    if(request.url == "/") fileName = "index";
    response.end(fs.readFileSync(process.env.PUBLIC_PATH + request.url + fileName + extension))
}

export function getPrivateFileResource(request:Request, response:Response){
    console.log(request.method, request.url)

    let extension = ".html";
    let fileName = ""
    fileName = (request.url == "/")  ?  "/index" : fileName = request.url.split("/")[1]
    console.log(fileName)
    console.log(process.env.PRIVATE_PATH + request.url + fileName + extension)
    response.end(fs.readFileSync(process.env.PRIVATE_PATH + request.url + fileName + extension))
}