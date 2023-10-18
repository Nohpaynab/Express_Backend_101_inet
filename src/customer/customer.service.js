import pool from "../connect.js";


// function
export default class CustomerService{
    async getAll(){
        let sql = "SELECT * FROM customer"
        const [data] = await pool.query(sql)
        console.log(data)
        return data
    }

    async insert(payload){
        const sql = `INSERT INTO customer SET ?`
        const [data] = await pool.query(sql, payload)
        return data
    }

    // update ระบุ id
    async update(id,payload){
        const sql = `UPDATE customer SET ? WHERE id = ${id}`
        const [data] = await pool.query(sql, payload)
        return data
    }

    async delete(id){
        const sql = `DELETE FROM customer WHERE id = ${id}`
        const [data] = await pool.query(sql)
        return data
    }
}