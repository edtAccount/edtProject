import {findIncomes} from "../models/incomeModel"
import {Request, Response} from "express"

export async function getIncome(req:Request, res:Response) {
    try{
        const data = await findIncomes()
        console.log(data)
        await res.send(data)
    }catch(err){
        console.log(err)
    }
}