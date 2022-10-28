// import { OkPacket, ResultSetHeader, RowDataPacket } from "mysql2/promise";

// export interface SelectUser{
//     (username:string, userpwd:string):Promise<false | RowDataPacket[] | RowDataPacket[][] | OkPacket | OkPacket[] | ResultSetHeader>:
// }
// export interface InsertUser{
//     (userData: { fullname:string, username:string, userpwd:string }):Promise<false | OkPacket | ResultSetHeader | RowDataPacket[] | RowDataPacket[][] | OkPacket[]>
// }
// export interface SelectUserByUsername{
//     (username:string):Promise<false | OkPacket | ResultSetHeader | RowDataPacket[] | RowDataPacket[][] | OkPacket[]>
// }