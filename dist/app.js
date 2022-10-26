"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = require("./routers/router");
const app = (0, express_1.default)();
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
//라우터 등록
app.use("/api", router_1.router);
app.listen(3000, () => {
    console.log("listening to 3000");
});
