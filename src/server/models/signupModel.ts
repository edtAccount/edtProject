import { pool } from "./db";

// export async function selectUserByUsername(username:string){
//     try{
//         const connection = await pool.getConnection(); 
//         try{
//             const [rows] = await connection.query(
//                             `SELECT * FROM user_tbl WHERE userid = (?)`,
//                             [username]
//                         )
//             connection.release();
                  
//             return rows
//         }catch(err){
//             console.log("Query err");
//             connection.release();
//             return false;
//         }
//     }catch(err){
//         console.log("getConnection err");
//         return false
//     }
// }

export async function insertUser(userData: { fullname:string, username:string, userpwd:string }){
    try{
        const connection = await pool.getConnection(); 
        try{
            const [rows] = await connection.query(
                            `INSERT user_tbl (name, userid, userpwd) VALUES (?, ?, ?)`, 
                            [userData.fullname, userData.username, userData.userpwd]
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