"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrivateFileResource = exports.getPublicFileResource = void 0;
const fs_1 = __importDefault(require("fs"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
function getPublicFileResource(request, response) {
    let extension = ".html";
    let fileName = "";
    if (request.url == "/")
        fileName = "index";
    response.end(fs_1.default.readFileSync(process.env.PUBLIC_PATH + request.url + fileName + extension));
}
exports.getPublicFileResource = getPublicFileResource;
function getPrivateFileResource(request, response) {
    let extension = ".html";
    let fileName = "";
    if (request.url == "/")
        fileName = "index";
    response.end(fs_1.default.readFileSync(process.env.PRIVATE_PATH + request.url + fileName + extension));
}
exports.getPrivateFileResource = getPrivateFileResource;
