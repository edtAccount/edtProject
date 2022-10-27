"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = exports.connection = void 0;
const promise_1 = __importDefault(require("mysql2/promise"));
const mysql_1 = __importDefault(require("mysql"));
const config_1 = require("../config/config");
// import {Request, Response} from "express"
//커넥트 옵션 
exports.connection = mysql_1.default.createConnection(config_1.connetOptions);
exports.pool = promise_1.default.createPool(config_1.connetOptions);
exports.connection.connect();
