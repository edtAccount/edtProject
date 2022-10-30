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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExpenseTotalByMonth = exports.getExpenseByMonth = exports.getIncomeTotalByMonth = exports.getIncomeByMonth = void 0;
const reportModel = __importStar(require("../models/reportModel"));
function getIncomeByMonth(req, res) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const userNum = Number((_a = req.session) === null || _a === void 0 ? void 0 : _a.user.id);
            console.log("req.session.user.id", req.session.user.id);
            const month = req.params.month || "10";
            const data = yield reportModel.findIncomeByMonth(userNum, month);
            res.send(data);
        }
        catch (err) {
            if (err instanceof Error)
                res.status(404).send(err.message);
        }
    });
}
exports.getIncomeByMonth = getIncomeByMonth;
function getIncomeTotalByMonth(req, res) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const userNum = Number((_a = req.session) === null || _a === void 0 ? void 0 : _a.user.id);
            const month = req.params.month || "10";
            const data = yield reportModel.findIncomeTotalByMonth(userNum, month);
            res.send(data);
        }
        catch (err) {
            if (err instanceof Error)
                res.status(404).send(err.message);
        }
    });
}
exports.getIncomeTotalByMonth = getIncomeTotalByMonth;
function getExpenseByMonth(req, res) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const userNum = Number((_a = req.session) === null || _a === void 0 ? void 0 : _a.user.id);
            const month = req.params.month || "10";
            const data = yield reportModel.findExpenseByMonth(userNum, month);
            res.send(data);
        }
        catch (err) {
            if (err instanceof Error)
                res.status(404).send(err.message);
        }
    });
}
exports.getExpenseByMonth = getExpenseByMonth;
function getExpenseTotalByMonth(req, res) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const userNum = Number((_a = req.session) === null || _a === void 0 ? void 0 : _a.user.id);
            const month = req.params.month || "10";
            const data = yield reportModel.findExpenseTotalByMonth(userNum, month);
            res.send(data);
        }
        catch (err) {
            if (err instanceof Error)
                res.status(404).send(err.message);
        }
    });
}
exports.getExpenseTotalByMonth = getExpenseTotalByMonth;
