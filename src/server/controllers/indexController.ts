import * as indexModel from "../models/indexModel"
import {Request, Response} from "express"


/**
 * 
 * income 컨트롤러
 */
export async function createIncome(req:Request, res:Response){
    try {
        if(!req.body){
            res.sendStatus(400).send("값을 찾을 수 없습니다");
            return;
        }   
        //user식별값

        const userNum = 6//req.headers....//req에서 user식별할 값 찾아 저장
        const {options, amount, content, actualDate} = req.body
        const body = {
            "userNum": userNum,
            "amount": amount,
            "options": options,
            "content": content,
            "actualDate": actualDate,
        }//db insert 결과값 리턴
        const createdIncome = await indexModel.addIncome(body) //
        res.status(201).send(createdIncome)  
    } catch (err) {
        console.log(err)
    }

}

export async function getIncomes(req:Request, res:Response){
    try {
        //user식별값
        const userNum = 6//req.headers....//req에서 user식별할 값 찾아 저장
        const data = await indexModel.findIncomes(userNum)//userNum으로 찾은 소득 리스트
        res.status(200).send(data) 
    } catch (err) {
        console.log(err)
    }
}

export async function updateIncome(req:Request, res:Response){
    try {
        if(!req.params){
            res.sendStatus(400).send("값을 찾을 수 없습니다");
            return;
        }  
        //user식별값
        const userNum = 6//req.headers....//req에서 user식별할 값 찾아 저장
        const incomeId = Number(req.params.incomeId)
        const {amount, content, options, actualDate} = req.body || ""
        const updateInfo = {
            "amount": amount || null,
            "options": options || null,
            "content": content || null,
            "actualDate": actualDate || null,
        }
        const data = await indexModel.modifyIncome(incomeId, updateInfo)
        res.status(200).send(data) 
    } catch (err) {
        console.log(err)
    }

}

export async function deleteIncome(req:Request, res:Response){
    try {
        if(!req.params){
            res.sendStatus(400).send("값을 찾을 수 없습니다");
            return;
        }  
        //user식별값
        const userNum = 6//req.headers....//req에서 user식별할 값 찾아 저장
        const incomeId = Number(req.params.incomeId)
        const data = await indexModel.removeIncome(incomeId)//userNum으로 찾은 소득 리스트
        res.status(200).send(data) 
    } catch (err) {
        console.log(err)
    }
}

/**
 * 
 * expense 컨트롤러
 */
export async function createExpense(req:Request, res:Response){
    try {
        if(!req.body){
            res.sendStatus(400).send("값을 찾을 수 없습니다");
            return;
        }   
        //user식별값
        const userNum = 6//req.headers....//req에서 user식별할 값 찾아 저장
        const {options, amount, content, actualDate} = req.body
        const body = {
            "userNum": userNum,
            "amount": amount,
            "options": options,
            "content": content,
            "actualDate": actualDate,
        }//db insert 결과값 리턴
        const createdIncome = await indexModel.addExpense(body) //
        res.status(201).send(createdIncome)  
    } catch (err) {
        console.log(err)
    }
}

export async function getExpenses(req:Request, res:Response){
    try {
        //user식별값
        const userNum = 6//req.headers....//req에서 user식별할 값 찾아 저장
        const data = await indexModel.findExpenses(userNum)//userNum으로 찾은 소득 리스트
        res.status(200).send(data) 
    } catch (err) {
        console.log(err)
    }
}

export async function updateExpense(req:Request, res:Response){
    try {
        if(!req.params){
            res.sendStatus(400).send("값을 찾을 수 없습니다");
            return;
        }  
        //user식별값
        const userNum = 6//req.headers....//req에서 user식별할 값 찾아 저장
        const expenseId = Number(req.params.expenseId)
        const {amount, content, options, actualDate} = req.body || ""
        const updateInfo = {
            "amount": amount || null,
            "options": options || null,
            "content": content || null,
            "actualDate": actualDate || null,
        }
        const data = await indexModel.modifyExpense(expenseId, updateInfo)
        res.status(200).send(data) 
    } catch (err) {
        console.log(err)
    }
}

export async function deleteExpense(req:Request, res:Response){
    try {
        if(!req.params){
            res.sendStatus(400).send("값을 찾을 수 없습니다");
            return;
        }  
        //user식별값
        const userNum = 6//req.headers....//req에서 user식별할 값 찾아 저장
        const expenseId = Number(req.params.expenseId)
        const data = await indexModel.removeExpense(expenseId)//userNum으로 찾은 소득 리스트
        res.status(200).send(data) 
    } catch (err) {
        console.log(err)
    }
}