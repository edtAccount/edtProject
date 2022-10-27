import * as reportModel from "../models/reportModel"
import {Request, Response} from "express"

export async function getIncomeByMonth(req:Request, res:Response){
    try {
        const month = req.params.month || "10";
        const data = await reportModel.findIncomeByMonth(month)
        res.send(data)
    } catch (err) {
        console.log(err)
    }
}

export async function getIncomeTotalByMonth(req:Request, res:Response){
    try {
        const month = req.params.month || "10";
        const data = await reportModel.findIncomeTotalByMonth(month)
        res.send(data)
    } catch (err) {
        console.log(err)
    }
}

export async function getExpenseByMonth(req:Request, res:Response){
    try {
        const month = req.params.month || "10";
        const data = await reportModel.findExpenseByMonth(month)
        res.send(data)
    } catch (err) {
        console.log(err)
    }
}

export async function getExpenseTotalByMonth(req:Request, res:Response){
    try {
        const month = req.params.month || "10";
        const data = await reportModel.findExpenseTotalByMonth(month)
        res.send(data)
    } catch (err) {
        console.log(err)
    }
}