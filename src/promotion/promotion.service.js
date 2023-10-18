import pool from "../connect.js";


// function
export default class PromotionService{
    async getAll(){
        let sql = "SELECT * FROM promotion"
        const [data] = await pool.query(sql)
        console.log(data)
        return data
    }

    async insert(payload){
        const sql = `INSERT INTO promotion SET ?`
        const [data] = await pool.query(sql, payload)
        return data
    }

    // update ระบุ id
    async update(id,payload){
        const sql = `UPDATE promotion SET ? WHERE id = ${id}`
        const [data] = await pool.query(sql, payload)
        return data
    }

    async delete(id){
        const sql = `DELETE FROM promotion WHERE id = ${id}`
        const [data] = await pool.query(sql)
        return data
    }
}