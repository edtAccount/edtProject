import mysql from "mysql2/promise"
import {connetOptions} from "../config/config"
// const config = require('../config/db_config.json');

//커넥트 옵션 
//  const connection = mysql.createConnection(connetOptions)


export const pool = mysql.createPool(connetOptions);

