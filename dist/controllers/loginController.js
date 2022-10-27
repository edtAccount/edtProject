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
exports.validateLoginPage = exports.login = void 0;
const loginModel_1 = require("../models/loginModel");
const fs_1 = __importDefault(require("fs"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
function login(request, response) {
    var _a, _b, _c, _d, _e;
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield (0, loginModel_1.selectUser)((_a = request.body) === null || _a === void 0 ? void 0 : _a.username, (_b = request.body) === null || _b === void 0 ? void 0 : _b.userpwd);
        console.log(result);
        if (!result.length) {
            response.writeHead(302, {
                "Content-Type": "text/html; charset=UTF-8;",
                'Location': 'http://localhost:3000/login'
            });
            response.end();
        }
        else {
            console.log("true", (0, loginModel_1.selectUser)((_c = request.body) === null || _c === void 0 ? void 0 : _c.username, (_d = request.body) === null || _d === void 0 ? void 0 : _d.userpwd));
            // 일치한다면 쿠키에 아이디값 저장 후 200 status ( 새로고침은  client 쪽에서 하게 하자)
            response.writeHead(302, {
                "Content-Type": "text/html; charset=UTF-8;",
                "Set-Cookie": `${(_e = request.body) === null || _e === void 0 ? void 0 : _e.username}`,
                'Location': 'http://localhost:3000/'
            });
            response.end();
        }
    });
}
exports.login = login;
function validateLoginPage(request, response) {
    console.log(request.url);
    console.log(process.env.PUBLIC_PATH);
    console.log(process.env.PRIVATE_PATH);
    response.end();
    const cookies = parseCookies(request.headers.cookie);
    if (cookies.username != null) {
        response.writeHead(302, {
            "Content-Type": "text/html; charset=UTF-8;",
            'Location': 'http://localhost:3000/'
        });
        response.end();
        return;
    }
    response.writeHead(200, {
        "Content-Type": "text/html; charset=UTF-8"
    });
    response.end(fs_1.default.readFileSync(getResource(request)));
}
exports.validateLoginPage = validateLoginPage;
const parseCookies = (cookie = '') => {
    console.log("cookie : ", cookie);
    return cookie
        .split(';')
        .map(v => v.split('='))
        .map(([k, ...vs]) => [k, vs.join('=')])
        .reduce((acc, [k, v]) => {
        acc[k.trim()] = decodeURIComponent(v);
        return acc;
    }, {});
};
function getResource(request) {
    let filePath = path.join(process.env.PWD, request.url);
    let extname = path.extname(filePath);
    if (!extname && extname != ".js") {
        const checkPaths = [`${filePath}.html`, path.join(filePath, "index.html")];
        for (const checkPath of checkPaths) {
            if (fs_1.default.existsSync(checkPath)) {
                filePath = checkPath;
                break;
            }
        }
    }
    else if (extname == ".js") {
        let checkPath = `${filePath}`;
        if (fs_1.default.existsSync(checkPath)) {
            filePath = checkPath;
        }
    }
    if (!fs_1.default.existsSync(filePath)) {
        return null;
    }
    return fs_1.default.readFileSync(filePath);
    // get 방식으로 들어온 경우에만 사용할 것
    // url 로 들어온 경로가 이름인 파일이 있는지 찾아본다.
    // 없으면 null 을 return 해준다.
    // 있으면 해당 파일이 html 인지 js 인지 파악 한다.
    // html 이라면 해당 파일을 읽고 fs.readFileSync로 읽고
    // response.write()에 써준다.
    // 또한 해당 이름으로 된 js 파일이 있다면
    // js 또한 읽어 response.write() 에 써준다.
    // js 을 받고 있다면 switch 문을 통해 Content-Type 을 정해준다.
    // 해당 하는 url을 switch문으로 해당 이름의 파일이
    // redirect Location 을 설정해준다.
}
function getLocation(request) {
}
function getContentType(request) {
    let extname = path.extname(filePath);
    switch (extname) {
        case ".html":
            return "text/html; charset=utf-8";
        case ".js":
            return "text/javascript; charset=utf-8";
        default:
            break;
    }
}
