import {connection} from "./db"


export async function findIncomes(){
    try{
        connection.query('select * from income_tbl', async(err, rows)=>{
            if(err){
                throw err;
            }
            return await rows
        })
    }
    catch(err){
        console.log(err)
    }
}

export function getIncome(req:Request, res:Response) {
    connection.query('select * from income_tbl', (err, rows)=>{
        if(err){
            throw err;
        }
        res.send(rows)
    })
}


export async function getIncomeSelect(req:Request, res:Response) {
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
}