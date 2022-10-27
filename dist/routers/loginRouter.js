"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRouter = void 0;
const express_1 = require("express");
const loginController_1 = require("../controllers/loginController");
const loginRouter = (0, express_1.Router)();
exports.loginRouter = loginRouter;
// loginRouter.get("/login", )
loginRouter.post("/login", loginController_1.login);
