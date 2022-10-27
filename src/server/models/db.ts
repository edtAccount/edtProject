import mysql2 from "mysql2/promise"
import mysql from "mysql"
import {connetOptions} from "../config/config"
// import {Request, Response} from "express"

//커넥트 옵션 
export const connection = mysql.createConnection(connetOptions)
export const pool = mysql2.createPool(connetOptions)

connection.connect()
