import * as reportModel from "../models/reportModel"
import {Request, Response} from "express"

export async function getIncomeByMonth(req:Request, res:Response){
    try {
        const userNum = Number(req.session?.user.id)
        console.log("req.session.user.id",req.session.user.id)
        const month = req.params.month || "10";
        const data = await reportModel.findIncomeByMonth(userNum,month)
        res.send(data)
    } catch (err) {
        if(err instanceof Error)
        res.status(404).send(err.message)
    }
}

export async function getIncomeTotalByMonth(req:Request, res:Response){
    try {
        const userNum = Number(req.session?.user.id)
        const month = req.params.month || "10";
        const data = await reportModel.findIncomeTotalByMonth(userNum,month)
        res.send(data)
    } catch (err) {
        if(err instanceof Error)
        res.status(404).send(err.message)
    }
}

export async function getExpenseByMonth(req:Request, res:Response){
    try {
        const userNum = Number(req.session?.user.id)
        const month = req.params.month || "10";
        const data = await reportModel.findExpenseByMonth(userNum,month)
        res.send(data)
    } catch (err) {
        if(err instanceof Error)
        res.status(404).send(err.message)
    }
}

export async function getExpenseTotalByMonth(req:Request, res:Response){
    try {
        const userNum = Number(req.session?.user.id)
        const month = req.params.month || "10";
        const data = await reportModel.findExpenseTotalByMonth(userNum,month)
        res.send(data)
    } catch (err) {
        if(err instanceof Error)
        res.status(404).send(err.message)
    }
}