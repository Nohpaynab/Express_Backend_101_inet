import pool from "../connect.js";


// function
export default class ProductService{
    async getAll(){
        let sql = "SELECT * FROM product"
        const [data] = await pool.query(sql)
        console.log(data)
        return data
    }

    async insert(payload){
        const sql = `INSERT INTO product SET ?`
        const [data] = await pool.query(sql, payload)
        return data
    }

    // update ระบุ id
    async update(id,payload){
        const sql = `UPDATE product SET ? WHERE id = ${id}`
        const [data] = await pool.query(sql, payload)
        return data
    }

    async delete(id){
        const sql = `DELETE FROM product WHERE id = ${id}`
        const [data] = await pool.query(sql)
        return data
    }
}