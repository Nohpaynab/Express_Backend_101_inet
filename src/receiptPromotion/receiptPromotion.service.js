import pool from "../connect.js";


// function
export default class RecProService{
    async getAll(){
        let sql = "SELECT * FROM receiptpromotion"
        const [data] = await pool.query(sql)
        console.log(data)
        return data
    }

    async insert(payload){
        const sql = `INSERT INTO receiptpromotion SET ?`
        const [data] = await pool.query(sql, payload)
        return data
    }

    // update ระบุ id
    async update(id,payload){
        const sql = `UPDATE receiptpromotion SET ? WHERE id = ${id}`
        const [data] = await pool.query(sql, payload)
        return data
    }

    async delete(id){
        const sql = `DELETE FROM receiptpromotion WHERE id = ${id}`
        const [data] = await pool.query(sql)
        return data
    }
}