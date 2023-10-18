import pool from "../connect.js";


// function
export default class EmployeeService{
    async getAll(){
        let sql = "SELECT * FROM employee"
        const [data] = await pool.query(sql)
        console.log(data)
        return data
    }

    async insert(payload){
        const sql = `INSERT INTO employee SET ?`
        const [data] = await pool.query(sql, payload)
        return data
    }

    // update ระบุ id
    async update(id,payload){
        const sql = `UPDATE employee SET ? WHERE id = ${id}`
        const [data] = await pool.query(sql, payload)
        return data
    }

    async delete(id){
        const sql = `DELETE FROM employee WHERE id = ${id}`
        const [data] = await pool.query(sql)
        return data
    }
}