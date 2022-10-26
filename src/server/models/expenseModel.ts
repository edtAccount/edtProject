import {connection} from "./db"

export async function getExpenseSelect(req:Request, res:Response) {
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
}