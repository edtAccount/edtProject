import mysql from "mysql2/promise"
import {connetOptions} from "../config/DBconfig"

export const pool = mysql.createPool(connetOptions);

