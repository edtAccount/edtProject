"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const promise_1 = __importDefault(require("mysql2/promise"));
const config_1 = require("../config/config");
// const config = require('../config/db_config.json');
//커넥트 옵션 
//  const connection = mysql.createConnection(connetOptions)
exports.pool = promise_1.default.createPool(config_1.connetOptions);
