import pool from "../connect.js";


// function
export default class ProductListService{
    async getAll(){
        let sql = "SELECT * FROM productList"
        const [data] = await pool.query(sql)
        console.log(data)
        return data
    }

    async insert(payload){
        const sql = `INSERT INTO productList SET ?`
        const [data] = await pool.query(sql, payload)
        return data
    }

    // update ระบุ id
    async update(id,payload){
        const sql = `UPDATE productList SET ? WHERE id = ${id}`
        const [data] = await pool.query(sql, payload)
        return data
    }

    async delete(id){
        const sql = `DELETE FROM productList WHERE id = ${id}`
        const [data] = await pool.query(sql)
        return data
    }
}