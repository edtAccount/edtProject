"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const path_1 = __importDefault(require("path"));
const indexRouter_1 = require("./routers/indexRouter");
const loginRouter_1 = require("./routers/loginRouter");
const logoutRouter_1 = require("./routers/logoutRouter");
const signupRouter_1 = require("./routers/signupRouter");
const dotenv_1 = __importDefault(require("dotenv"));
const reportRouter_1 = require("./routers/reportRouter");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.static(path_1.default.join(process.env.PUBLIC_PATH, "img")));
app.use(express_1.default.static(path_1.default.join(process.env.PUBLIC_PATH, "js")));
app.use(express_1.default.static(path_1.default.join(process.env.PUBLIC_PATH, "css")));
app.use(express_1.default.static(path_1.default.join(process.env.PRIVATE_PATH, "img")));
app.use(express_1.default.static(path_1.default.join(process.env.PRIVATE_PATH, "js")));
app.use(express_1.default.static(path_1.default.join(process.env.PRIVATE_PATH, "css")));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
//라우터 등록
<<<<<<< HEAD
app.use("/api", router_1.router);
=======
app.use(indexRouter_1.indexRouter);
app.use(loginRouter_1.loginRouter);
app.use(logoutRouter_1.logoutRouter);
app.use(signupRouter_1.signupRouter);
app.use(reportRouter_1.reportRouter);
>>>>>>> 7ffb93b20188345a42373fd5f6e55e69b1607f9d
app.listen(3000, () => {
    console.log("listening to 3000");
});
