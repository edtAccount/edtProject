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

// export function getIncome(req, res) {
//     connection.query('select * from income_tbl', (err, rows)=>{
//         if(err){
//             throw err;
//         }
//         res.send(rows)
//     })
// }


