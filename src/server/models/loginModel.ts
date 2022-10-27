import { pool } from "./db";


export async function selectUser(username:string, userpwd:string){
    try{
        const connection = await pool.getConnection(); 
        try{
            const [rows] = await connection.query(
                            `SELECT * FROM USER_TBL WHERE userId = (?) AND userpwd = (?)`, 
                            [username, userpwd]
                        )
            connection.release();
                  
            return rows
        }catch(err){
            console.log("Query err");
            connection.release();
            return false;
        }
    }catch(err){
        console.log("getConnection err");
        return false
    }
}

