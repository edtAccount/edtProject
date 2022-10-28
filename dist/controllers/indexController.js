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
exports.deleteExpense = exports.updateExpense = exports.getExpenses = exports.createExpense = exports.deleteIncome = exports.updateIncome = exports.getIncomes = exports.createIncome = void 0;
const indexModel = __importStar(require("../models/indexModel"));
/**
 *
 * income 컨트롤러
 */
function createIncome(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!req.body) {
                res.sendStatus(400).send("값을 찾을 수 없습니다");
                return;
            }
            //user식별값
            const userNum = 6; //req.headers....//req에서 user식별할 값 찾아 저장
            const { options, amount, content, actualDate } = req.body;
            const body = {
                "userNum": userNum,
                "amount": amount,
                "options": options,
                "content": content,
                "actualDate": actualDate,
            }; //db insert 결과값 리턴
            const createdIncome = yield indexModel.addIncome(body); //
            res.status(201).send(createdIncome);
        }
        catch (err) {
            console.log(err);
        }
    });
}
exports.createIncome = createIncome;
function getIncomes(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            //user식별값
            const userNum = 6; //req.headers....//req에서 user식별할 값 찾아 저장
            const data = yield indexModel.findIncomes(userNum); //userNum으로 찾은 소득 리스트
            res.status(200).send(data);
        }
        catch (err) {
            console.log(err);
        }
    });
}
exports.getIncomes = getIncomes;
function updateIncome(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!req.params) {
                res.sendStatus(400).send("값을 찾을 수 없습니다");
                return;
            }
            //user식별값
            const userNum = 6; //req.headers....//req에서 user식별할 값 찾아 저장
            const incomeId = Number(req.params.incomeId);
            const { amount, content, options, actualDate } = req.body || "";
            const updateInfo = {
                "amount": amount || null,
                "options": options || null,
                "content": content || null,
                "actualDate": actualDate || null,
            };
            const data = yield indexModel.modifyIncome(incomeId, updateInfo);
            res.status(200).send(data);
        }
        catch (err) {
            console.log(err);
        }
    });
}
exports.updateIncome = updateIncome;
function deleteIncome(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!req.params) {
                res.sendStatus(400).send("값을 찾을 수 없습니다");
                return;
            }
            //user식별값
            const userNum = 6; //req.headers....//req에서 user식별할 값 찾아 저장
            const incomeId = Number(req.params.incomeId);
            const data = yield indexModel.removeIncome(incomeId); //userNum으로 찾은 소득 리스트
            res.status(200).send(data);
        }
        catch (err) {
            console.log(err);
        }
    });
}
exports.deleteIncome = deleteIncome;
/**
 *
 * expense 컨트롤러
 */
function createExpense(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!req.body) {
                res.sendStatus(400).send("값을 찾을 수 없습니다");
                return;
            }
            //user식별값
            const userNum = 6; //req.headers....//req에서 user식별할 값 찾아 저장
            const { options, amount, content, actualDate } = req.body;
            const body = {
                "userNum": userNum,
                "amount": amount,
                "options": options,
                "content": content,
                "actualDate": actualDate,
            }; //db insert 결과값 리턴
            const createdIncome = yield indexModel.addExpense(body); //
            res.status(201).send(createdIncome);
        }
        catch (err) {
            console.log(err);
        }
    });
}
exports.createExpense = createExpense;
function getExpenses(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            //user식별값
            const userNum = 6; //req.headers....//req에서 user식별할 값 찾아 저장
            const data = yield indexModel.findExpenses(userNum); //userNum으로 찾은 소득 리스트
            res.status(200).send(data);
        }
        catch (err) {
            console.log(err);
        }
    });
}
exports.getExpenses = getExpenses;
function updateExpense(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!req.params) {
                res.sendStatus(400).send("값을 찾을 수 없습니다");
                return;
            }
            //user식별값
            const userNum = 6; //req.headers....//req에서 user식별할 값 찾아 저장
            const expenseId = Number(req.params.expenseId);
            const { amount, content, options, actualDate } = req.body || "";
            const updateInfo = {
                "amount": amount || null,
                "options": options || null,
                "content": content || null,
                "actualDate": actualDate || null,
            };
            const data = yield indexModel.modifyExpense(expenseId, updateInfo);
            res.status(200).send(data);
        }
        catch (err) {
            console.log(err);
        }
    });
}
exports.updateExpense = updateExpense;
function deleteExpense(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!req.params) {
                res.sendStatus(400).send("값을 찾을 수 없습니다");
                return;
            }
            //user식별값
            const userNum = 6; //req.headers....//req에서 user식별할 값 찾아 저장
            const expenseId = Number(req.params.expenseId);
            const data = yield indexModel.removeExpense(expenseId); //userNum으로 찾은 소득 리스트
            res.status(200).send(data);
        }
        catch (err) {
            console.log(err);
        }
    });
}
exports.deleteExpense = deleteExpense;
