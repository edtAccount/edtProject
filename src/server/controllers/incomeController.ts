import {findIncomes} from "../models/incomeModel"
import {Request, Response} from "express"

export function getIncome(req:Request, res:Response) {
    try{
        const data = findIncomes()
        console.log(data)
        res.send(JSON.stringify(data))
    }catch(err){
        console.log(err)
    }
}