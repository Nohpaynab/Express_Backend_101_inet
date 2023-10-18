import EmployeeService from "./employee.service.js"

export const getEmployee = async (req, res) => {
    try{
        const data = await new EmployeeService().getAll();
        console.log(data);
        return res.status(200).send(data)
    }catch(error){
        console.log(error);
        return res.status(500).send('error')
    }
    return res.status(200).send('ok')
}


export const addEmployee = async (req, res) => {
    console.log(req.body)
    try{
        const data = await new EmployeeService().insert(req.body);
        // console.log('data : ', data.insertId);
        console.log('data : ', data);
        if (data.insertId){
            return res.status(200).send('insert success')
        }
        return res.status(500).send('insert Fail')
    }catch(error){
        console.log(error);
        if (error.errno == 1062){
            return res.status(400).send('มีเลขบัตรปชชนี้ในระบบแล้ว')
        }
        return res.status(500).send('error')
    }
    return res.status(200).send('ok')
}

export const updateEmployee = async (req, res) => {
    // สร้างแยกเพราะไม่สามารถ โยน payload เข้าตรงๆได้
    const employeeId = req.body.id
    // สร้าง payload ขึ้นมา 
    const payload = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        // idCard: req.body.idCard,
        birthday: req.body.birthday,
        tel: req.body.tel,
        socialContact: req.body.socialContact,
        email: req.body.email,
        address: req.body.address
    }
    try{
        const data = await new EmployeeService().update(employeeId, payload);
        console.log('data : ', data);
        if (data.affectedRows){
            return res.status(200).send('update success')
        }
        return res.status(500).send('update Fail')
    }catch(error){
        return res.status(500).send('error')
    }
    return res.status(200).send('ok')
}

export const deleteEmployee = async (req, res) => {
    // สร้างแยกเพราะไม่สามารถ โยน payload เข้าตรงๆได้
    const employeeId = req.body.id

    try{
        const data = await new EmployeeService().delete(employeeId);
        console.log('data : ', data);
        if (data.affectedRows){
            return res.status(200).send('Delete success')
        }
        return res.status(500).send('Delete Fail')
    }catch(error){
        return res.status(500).send('error')
    }
    return res.status(200).send('ok')
}