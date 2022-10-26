"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mysql_1 = __importDefault(require("mysql"));
// import connectionOptions from "../../typeConfig"
// import {createConnection} from "typeorm"
const app = (0, express_1.default)();
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
//커넥트 옵션 
const connection = mysql_1.default.createConnection({
    //  사용할 DB 가 설치된 호스트의 IP
    host: '172.29.12.155',
    port: 3306,
    user: 'root',
    password: '1q2w3e4r',
    // 어떤 스키마를 사용할지 ?
    database: 'exercise',
});
//연결 완료
connection.connect();
app.get("/api/report", (req, res) => {
    connection.query('select * from income_tbl', (err, rows) => {
        if (err) {
            throw err;
        }
        res.send(rows);
    });
});
app.listen(3000, () => {
    console.log("listening to 3000");
});
