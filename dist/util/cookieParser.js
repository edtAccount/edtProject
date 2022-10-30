"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseCookies = void 0;
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
exports.parseCookies = parseCookies;
