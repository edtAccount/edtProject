import {connection} from "./db"

//연결 완료
connection.connect()

// export function findIncomes(){
//     connection.query('select * from income_tbl', (err, rows)=>{
//         if(err){
//             throw err;
//         }
//         return rows
//     })
// }

export function getIncome(req:Request, res:Response) {
    connection.query('select * from income_tbl', (err, rows)=>{
        if(err){
            throw err;
        }
        res.send(rows)
    })
}