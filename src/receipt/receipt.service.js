import pool from "../connect.js";


// function
export default class ReceiptService{
    async getAll(){
        let sql = "SELECT * FROM receipt"
        const [data] = await pool.query(sql)
        console.log(data)
        return data
    }

    async insert(payload){
        const sql = `INSERT INTO receipt SET ?`
        const [data] = await pool.query(sql, payload)
        return data
    }

    // update ระบุ id
    async update(id,payload){
        const sql = `UPDATE receipt SET ? WHERE id = ${id}`
        const [data] = await pool.query(sql, payload)
        return data
    }

    async delete(id){
        const sql = `DELETE FROM receipt WHERE id = ${id}`
        const [data] = await pool.query(sql)
        return data
    }
}