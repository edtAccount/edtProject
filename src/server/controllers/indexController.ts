import * as indexModel from "../models/indexModel"
import {Request, Response} from "express"

export async function createIncome(req:Request, res:Response){
    const {options, amount, content, date} = req.body
    
}

export async function getIncomesByUser(req:Request, res:Response){

}

export async function updateIncome(req:Request, res:Response){

}

export async function deleteIncome(req:Request, res:Response){

}


export async function createExpense(req:Request, res:Response){

}

export async function getExpenseByUser(req:Request, res:Response){

}

export async function updateExpense(req:Request, res:Response){

}

export async function deleteExpense(req:Request, res:Response){

}