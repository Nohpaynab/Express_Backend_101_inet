import ProductListService from "./productList.service.js"

export const getProList = async (req, res) => {
    try{
        const data = await new ProductListService().getAll();
        console.log(data);
        return res.status(200).send(data)
    }catch(error){
        console.log(error);
        return res.status(500).send('error')
    }
    return res.status(200).send('ok')
}


export const addProList = async (req, res) => {
    console.log(req.body)
    try{
        const data = await new ProductListService().insert(req.body);
        // console.log('data : ', data.insertId);
        console.log('data : ', data);
        if (data.insertId){
            return res.status(200).send('insert success')
        }
        return res.status(500).send('insert Fail')
    }catch(error){
        // console.log(error);
        // if (error.errno == 1062){
        //     return res.status(400).send('id สินค้าซ้ำ')
        // }
        return res.status(500).send('error')
    }
    return res.status(200).send('ok')
}

export const updateProList = async (req, res) => {
    const ProductListId = req.body.id
    const payload = {
        receipt_id: req.body.receipt_id,
        product_id: req.body.product_id,
        product_amount: req.body.product_amount
    }
    try{
        const data = await new ProductListService().update(ProductListId, payload);
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

export const deleteProList = async (req, res) => {
    // สร้างแยกเพราะไม่สามารถ โยน payload เข้าตรงๆได้
    const ProductListId = req.body.id

    try{
        const data = await new ProductListService().delete(ProductListId);
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