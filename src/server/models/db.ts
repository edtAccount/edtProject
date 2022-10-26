import mysql from "mysql"
import {connetOptions} from "../config/config"

//커넥트 옵션 
export const connection = mysql.createConnection(connetOptions)

connection.connect()
