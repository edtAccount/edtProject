"use strict";
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
const loginModel_1 = require("../models/loginModel");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
function login(request, response) {
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function* () {
        console.log(request.cookies);
        let result = yield (0, loginModel_1.selectUser)((_a = request.body) === null || _a === void 0 ? void 0 : _a.username, (_b = request.body) === null || _b === void 0 ? void 0 : _b.userpwd);
        console.log(result);
        if (!result.length) {
            console.log("로그인 실패");
            response.end();
        }
        else {
            response.cookie("username", (_c = request.body) === null || _c === void 0 ? void 0 : _c.username, {
                maxAge: 60 * 60 * 24,
            });
            response.cookie("id", result[0].id, {
                maxAge: 60 * 60 * 24,
            });
            response.redirect(302, "http://localhost:3000/");
            response.end();
        }
    });
}
exports.login = login;
