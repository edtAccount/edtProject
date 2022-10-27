import dotenv from "dotenv";
dotenv.config();


export const connetOptions = {
    // host: '172.29.12.155',
    // port: 3306,
    // user: 'root',
    // password: '1q2w3e4r',
    // database: 'exercise',
    // connectTimeout: 5000,
    // connectionLimit: 30,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    connectTimeout: 5000,
    connectionLimit: 30,
}