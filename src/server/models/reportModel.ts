import { pool } from "./db"


export async function findIncomeByMonth(month: string) {
    try {
        let conn = await pool.getConnection();
        try {
            let [result] = await conn.query(
                `select options, sum(amount) as "optionAmount"
                from income_tbl
                where DATE_FORMAT(insert_date, "%m") = (?)
                group by options`, [month]
            )
            conn.release();
            return result;
        } catch (err) {
            console.log("Query err");
            conn.release();
            return false;
        }
    } catch (err) {
        console.log("getConnection err");
        return false
    }
}


export async function findIncomeTotalByMonth(month: string) {
    try {
        let conn = await pool.getConnection();
        try {
            let [result] = await conn.query(
                `select sum(amount) as "totalAmount"
                from income_tbl
                where DATE_FORMAT(insert_date, "%m") = (?)`, [month]
            )
            conn.release();
            return result;
        } catch (err) {
            console.log("Query err");
            conn.release();
            return false;
        }
    } catch (err) {
        console.log("getConnection err");
        return false
    }
}



export async function findExpenseByMonth(month: string) {
    try {
        let conn = await pool.getConnection();
        try {
            let [result] = await conn.query(
                `select options, sum(amount) as "optionAmount"
                from expense_tbl
                where DATE_FORMAT(insert_date, "%m") = (?)
                group by options`, [month]
            )
            conn.release();
            return result;
        } catch (err) {
            console.log("Query err");
            conn.release();
            return false;
        }
    } catch (err) {
        console.log("getConnection err");
        return false
    }
}


export async function findExpenseTotalByMonth(month: string) {
    try {
        let conn = await pool.getConnection();
        try {
            let [result] = await conn.query(
                `select sum(amount) as "totalAmount"
                from expense_tbl
                where DATE_FORMAT(insert_date, "%m") = (?)`, [month]
            )
            conn.release();
            return result;
        } catch (err) {
            console.log("Query err");
            conn.release();
            return false;
        }
    } catch (err) {
        console.log("getConnection err");
        return false
    }
}

