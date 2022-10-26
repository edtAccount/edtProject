import { connection } from "./db";

export function selectUserName(userName:string){
    connection.query(
        `SELECT * FROM USER_TBL WHERE userName = ${userName}`
    , (err, rows)=>{
        if(err){
            throw err;
        }
        if(rows) return true;
        return false;
    })
}

export function selectUserPwd(userPwd:string){
    connection.query(
        `SELECT * FROM USER_TBL WHERE userPwd = ${userPwd}`
    , (err, rows)=>{
        if(err){
            throw err;
        }
        if(rows) return true;
        return false;
    })
}