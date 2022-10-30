"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const bcrypt = __importStar(require("bcrypt"));
const loginModel_1 = require("../models/loginModel");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
function login(request, response) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield (0, loginModel_1.selectUser)((_a = request.body) === null || _a === void 0 ? void 0 : _a.username, (_b = request.body) === null || _b === void 0 ? void 0 : _b.userpwd);
        if (!result.length) {
            console.log("로그인 실패");
            response.end();
        }
        else {
            // 세션 사용!!!
            request.session.user = {
                id: result[0]["id"],
                name: request.body.username,
                password: bcrypt.hashSync(request.body.userpwd, 10),
                authorized: true,
            };
            // 쿠키 사용!!
            // response.cookie("username", request.body?.username, {
            //     maxAge:60*60*24,
            // });
            return request.session.save(() => {
                response.cookie("id", result[0].id, {
                    maxAge: 60 * 60 * 24,
                });
                response.redirect(302, "http://localhost:3000/");
                response.end();
            });
        }
    });
}
exports.login = login;
