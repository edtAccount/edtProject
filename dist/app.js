"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const reportRouter_1 = require("./routers/reportRouter");
const path = require("path");
const app = (0, express_1.default)();
app.use(express_1.default.static("public"));
console.log(path.join(__dirname, '..', 'public'));
//app.get("/report", express.static(path.join(__dirname,'..','public','report.html')))
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
//라우터 등록
app.use("/api", reportRouter_1.reportRouter);
app.get("/report", (req, res) => {
    console.log(req);
    const filename = req.url.split("/")[1];
    console.log(filename);
    res.sendFile((path.join(__dirname, '..', 'public', filename + ".html")));
});
//`./${filename}.html`
app.listen(3000, () => {
    console.log("listening to 3000");
});
