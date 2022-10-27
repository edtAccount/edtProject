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
Object.defineProperty(exports, "__esModule", { value: true });
exports.signup = void 0;
const signupModel_1 = require("../models/signupModel");
function signup(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield (0, signupModel_1.insertUser)(request.body);
        console.log(result.affectedRows);
        if (!result.affectedRows) {
            response.writeHead(302, {
                "Content-Type": "text/html; charset=UTF-8;",
                'Location': 'http://localhost:3000/sign.html'
            });
            response.end();
        }
        else {
            response.writeHead(302, {
                "Content-Type": "text/html; charset=UTF-8;",
                'Location': 'http://localhost:3000/login.html'
            });
            response.end();
        }
        console.log(result);
    });
}
exports.signup = signup;
