import mysql from "mysql"
import {connetOptions} from "../config/config"
import {Request, Response} from "express"

//커넥트 옵션 
export const connection = mysql.createConnection(connetOptions)

connection.connect()

export function getExpenseByMonth(req:Request, res:Response) {
    try {
        connection.query(
            `select options, sum(amount) as "optionAmount"
            from expense_tbl
            where DATE_FORMAT(insert_date, "%m") = "10"
            group by options`
        , (err, rows)=>{
            if(err){
                throw err;
            }
            res.send(rows)
        })
    } catch (err) {
        console.log(err)
    }

}

export function getIncomeByMonth(req:Request, res:Response) {
    try {
        connection.query(
            `select options, sum(amount) as "optionAmount"
            from income_tbl
            where DATE_FORMAT(insert_date, "%m") = "10"
            group by options`
        , (err, rows)=>{
            if(err){
                throw err;
            }
            res.send(rows)
        })
    } catch (err) {
        console.log(err)
    }

}
