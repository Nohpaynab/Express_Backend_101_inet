import ReceiptService from "./receipt.service.js"

export const getReceipt = async (req, res) => {
    try{
        const data = await new ReceiptService().getAll();
        console.log(data);
        return res.status(200).send(data)
    }catch(error){
        console.log(error);
        return res.status(500).send('error')
    }
    return res.status(200).send('ok')
}


export const addReceipt = async (req, res) => {
    console.log(req.body)
    try{
        const data = await new ReceiptService().insert(req.body);
        // console.log('data : ', data.insertId);
        console.log('data : ', data);
        if (data.insertId){
            return res.status(200).send('insert success')
        }
        return res.status(500).send('insert Fail')
    }catch(error){
        console.log(error);
        if (error.errno == 1062){
            return res.status(400).send('id สินค้าซ้ำ')
        }
        return res.status(500).send('error')
    }
    return res.status(200).send('ok')
}

export const updateReceipt = async (req, res) => {
    const ReceiptId = req.body.id
    const payload = {
        cus_id: req.body.cus_id,
        employee_id: req.body.employee_id,
        receiptDate: req.body.receiptDate,
        receiptTime: req.body.receiptTime,
        totalPrice: req.body.totalPrice,
        receiveMoney: req.body.receiveMoney,
        changeMoney: req.body.changeMoney,
        addScore_member: req.body.addScore_member
    }
    try{
        const data = await new ReceiptService().update(ReceiptId, payload);
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

export const deleteReceipt = async (req, res) => {
    // สร้างแยกเพราะไม่สามารถ โยน payload เข้าตรงๆได้
    const ReceiptId = req.body.id

    try{
        const data = await new ReceiptService().delete(ReceiptId);
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