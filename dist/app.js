"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import {router} from "./routers/router"
const loginRouter_1 = require("./routers/loginRouter");
const signupRouter_1 = require("./routers/signupRouter");
const app = (0, express_1.default)();
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
// app.use(router)
app.use(loginRouter_1.loginRouter);
app.use(signupRouter_1.signupRouter);
app.listen(3000, () => {
    console.log("listening to 3000");
});
