import dotenv from "dotenv";
dotenv.config();


export const connetOptions = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    connectTimeout: 5000,
    connectionLimit: 30,
}