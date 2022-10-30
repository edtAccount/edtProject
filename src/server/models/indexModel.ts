import { pool } from "./db";

export interface AccountInfo {
    userNum: number | null;
    amount: number | null;
    options: string | null;
    content: string | null;
    actualDate: Date | null;
}


export async function addIncome(incomeInfo:AccountInfo) {
  try {
    const {userNum, options, amount, content, actualDate} = incomeInfo
    let conn = null;
    try {
      conn = await pool.getConnection();
      let [result] = await conn.query(
        `INSERT INTO income_tbl(userNum, options, amount, content, actualDate)
         VALUES(?, ?, ?, ? ,?)`,
        [userNum, options, amount, content, actualDate]
      );
      conn.release()
      return result;
    } catch (err) {
        throw err
    }
  } catch (err) {
    throw err
  }
}

export async function findIncomes(userNum:number) {
    try {
        let conn = null;
        try {
          conn = await pool.getConnection();
          let [result] = await conn.query(
            `select *
            from income_tbl
            where usernum = (?)
            order by actualDate`,
            [userNum]
          );
          conn.release()
          return result;
        } catch (err) {
            throw err
        }
      } catch (err) {
        throw err
      }
}

export async function findIncomesByDate(userNum:number, actualDate:string) {
  try {
      let conn = null;
      try {
        conn = await pool.getConnection();
        let [result] = await conn.query(
          `select *
          from income_tbl
          where usernum = (?)
          and DATE_FORMAT(actualDate, '%Y-%m-%d') = (?)`,
          [userNum, actualDate]
        );
        conn.release()
        return result;
      } catch (err) {
          throw err
      }
    } catch (err) {
      throw err
    }
}

export async function modifyIncome(incomeId:number, updateInfo: Partial<AccountInfo>) {
    try {
        let conn = null;
        try {
          conn = await pool.getConnection();
          let result = null;
          for (let [key,value] of Object.entries(updateInfo)){
            if(value!==null){

              await conn.query(
                `update income_tbl
                set ${key} = ? 
                where id = ?`, 
              [ value, incomeId])
            }
          }
          conn.release()
          return result;
        } catch (err) {
            throw err
        }
      } catch (err) {
        throw err
      }
}

export async function removeIncome(incomeId:number) {
    try {
        let conn = null;
        try {
          conn = await pool.getConnection();
          let [result] = await conn.query(
            `delete from income_tbl where id = ?`,
            [incomeId]
          );
          conn.release()
          return result;
        } catch (err) {
            throw err
        }
      } catch (err) {
        throw err
      }
}

export async function addExpense(expenseInfo:AccountInfo) {
  try {
    const {userNum, options, amount, content, actualDate} = expenseInfo
    let conn = null;
    try {
      conn = await pool.getConnection();
      let [result] = await conn.query(
        `INSERT INTO expense_tbl(userNum, options, amount, content, actualDate)
         VALUES(?, ?, ?, ? ,?)`,
        [userNum, options, amount, content, actualDate]
      );
      conn.release()
      return result;
    } catch (err) {
        throw err
    }
  } catch (err) {
    throw err
  }
}

export async function findExpenses(userNum:number) {
    try {
        let conn = null;
        try {
          conn = await pool.getConnection();
          let [result] = await conn.query(
            `select *
            from expense_tbl
            where usernum = (?)
            order by actualDate`,
            [userNum]
          );
          conn.release()
          return result;
        } catch (err) {
            throw err
        }
      } catch (err) {
        throw err
      }
}

export async function findExpensesByDate(userNum:number, actualDate:string) {
  try {
      let conn = null;
      try {
        conn = await pool.getConnection();
        let [result] = await conn.query(
          `select *
          from expense_tbl
          where usernum = (?)
          and DATE_FORMAT(actualDate, '%Y-%m-%d') = (?)`,
          [userNum, actualDate]
        );
        conn.release()
        return result;
      } catch (err) {
          throw err
      }
    } catch (err) {
      throw err
    }
}


export async function modifyExpense(expenseId:number, updateInfo: Partial<AccountInfo>) {
    try {
        let conn = null;
        try {
          conn = await pool.getConnection();
          let result = null;
          for (let [key,value] of Object.entries(updateInfo)){
            if(value!==null){
              await conn.query(
                `update expense_tbl
                set ${key} = ? 
                where id = ?`, 
              [ value, expenseId])
            }
          }
          conn.release()
          return result;
        } catch (err) {
            throw err
        }
      } catch (err) {
        throw err
      }
}

export async function removeExpense(expenseId:number) {
    try {
        let conn = null;
        try {
          conn = await pool.getConnection();
          let [result] = await conn.query(
            `delete from expense_tbl where id = ?`,
            [expenseId]
          );
          conn.release()
          return result;
        } catch (err) {
            throw err
        }
      } catch (err) {
        throw err
      }
}

