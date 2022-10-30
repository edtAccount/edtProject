import { pool } from "./db";

interface AccountInfo {
  userNum: number | null;
  amount: number | null;
  options: string | null;
  content: string | null;
  actualDate: Date | null;
}
//userNum:number, options:string, amount:number, content:string, actualDate:Date
export async function addIncome(incomeInfo: AccountInfo) {
  try {
    const { userNum, options, amount, content, actualDate } = incomeInfo
    let conn = await pool.getConnection();
    try {
      let [result] = await conn.query(
        `INSERT INTO income_tbl(userNum, options, amount, content, actualDate)
         VALUES(?, ?, ?, ? ,?)`,
        [userNum, options, amount, content, actualDate]
      );
      conn.release()
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

export async function findIncomes(userNum: number, date: string) {
  try {
    let conn = await pool.getConnection();
    try {
      let [result] = (date !== null) ? 
      await conn.query(
        `select *
            from income_tbl
            where usernum = (?)
            and DATE_FORMAT(actualDate, "%Y-%m-%d") = (?)
            order by actualDate`,
        [userNum, date]
      )
      :
     await conn.query(
        `select *
            from income_tbl
            where usernum = (?)
            order by actualDate`,
        [userNum]
      );
      conn.release()
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

export async function modifyIncome(incomeId: number, updateInfo: Omit<Partial<AccountInfo>, 'userNum'>) {
  try {
    let conn = await pool.getConnection();
    try {
      let result = null;
      for (let [key, value] of Object.entries(updateInfo)) {
        if (value !== null) {

          await conn.query(
            `update income_tbl
                set ${key} = ? 
                where id = ?`,
            [value, incomeId])
        }
      }
      conn.release()
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

export async function removeIncome(incomeId: number) {
  try {
    let conn = await pool.getConnection();
    try {
      let [result] = await conn.query(
        `delete from income_tbl where id = ?`,
        [incomeId]
      );
      conn.release()
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

export async function addExpense(expenseInfo: AccountInfo) {
  try {
    const { userNum, options, amount, content, actualDate } = expenseInfo
    let conn = await pool.getConnection();
    try {
      let [result] = await conn.query(
        `INSERT INTO expense_tbl(userNum, options, amount, content, actualDate)
         VALUES(?, ?, ?, ? ,?)`,
        [userNum, options, amount, content, actualDate]
      );
      conn.release()
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

export async function findExpenses(userNum: number) {
  try {
    let conn = await pool.getConnection();
    try {
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
      console.log("Query err");
      conn.release();
      return false;
    }
  } catch (err) {
    console.log("getConnection err");
    return false
  }
}

export async function modifyExpense(expenseId: number, updateInfo: Omit<Partial<AccountInfo>, 'userNum'>) {
  try {
    let conn = await pool.getConnection();
    try {
      let result = null;
      for (let [key, value] of Object.entries(updateInfo)) {
        if (value !== null) {
          await conn.query(
            `update expense_tbl
                set ${key} = ? 
                  where id = ?`,
            [value, expenseId])
        }
      }
      conn.release()
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

export async function removeExpense(expenseId: number) {
  try {
    let conn = await pool.getConnection();
    try {
      let [result] = await conn.query(
        `delete from expense_tbl where id = ?`,
        [expenseId]
      );
      conn.release()
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

