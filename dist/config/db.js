"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const db_info = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    // host: '172.29.12.155',
    // port: 3306,
    // user: 'root',
    // password: '1q2w3e4r',
    // database: 'exercise',
};
const db = {
    init: () => {
        return mysql_1.default.createConnection(db_info);
    },
};
exports.default = db;
// const connection = mysql.createConnection(db_info)
// //연결 완료
// connection.connect();
