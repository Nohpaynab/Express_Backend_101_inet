import pool from "../connect.js";


// function
export default class StockService{
    async getAll(){
        let sql = "SELECT * FROM stock"
        const [data] = await pool.query(sql)
        console.log(data)
        return data
    }

    async insert(payload){
        const sql = `INSERT INTO stock SET ?`
        const [data] = await pool.query(sql, payload)
        return data
    }

    // update ระบุ id
    async update(id,payload){
        const sql = `UPDATE stock SET ? WHERE id = ${id}`
        const [data] = await pool.query(sql, payload)
        return data
    }

    async delete(id){
        const sql = `DELETE FROM stock WHERE id = ${id}`
        const [data] = await pool.query(sql)
        return data
    }
}