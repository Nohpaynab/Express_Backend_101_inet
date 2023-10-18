import RecProService from "./receiptPromotion.service.js"

export const getRecPro = async (req, res) => {
    try{
        const data = await new RecProService().getAll();
        console.log(data);
        return res.status(200).send(data)
    }catch(error){
        console.log(error);
        return res.status(500).send('error')
    }
    return res.status(200).send('ok')
}


export const addRecPro = async (req, res) => {
    console.log(req.body)
    try{
        const data = await new RecProService().insert(req.body);
        // console.log('data : ', data.insertId);
        console.log('data : ', data);
        if (data.insertId){
            return res.status(200).send('insert success')
        }
        return res.status(500).send('insert Fail')
    }catch(error){
        console.log(error);
        if (error.errno == 1062){
            // return res.status(400).send('id สินค้าซ้ำ')
        }
        return res.status(500).send('error')
    }
    return res.status(200).send('ok')
}

export const updateRecPro = async (req, res) => {
    const RecProId = req.body.id
    const payload = {
        receipt_id: req.body.receipt_id,
        promotion_id:req.body.promotion_id
    }
    try{
        const data = await new RecProService().update(RecProId, payload);
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

export const deleteRecPro = async (req, res) => {
    // สร้างแยกเพราะไม่สามารถ โยน payload เข้าตรงๆได้
    const RecProId = req.body.id

    try{
        const data = await new RecProService().delete(RecProId);
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