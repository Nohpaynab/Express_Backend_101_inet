import ProductService from "./product.service.js"

export const getProduct = async (req, res) => {
    try{
        const data = await new ProductService().getAll();
        console.log(data);
        return res.status(200).send(data)
    }catch(error){
        console.log(error);
        return res.status(500).send('error')
    }
    return res.status(200).send('ok')
}


export const addProduct = async (req, res) => {
    console.log(req.body)
    try{
        const data = await new ProductService().insert(req.body);
        // console.log('data : ', data.insertId);
        console.log('data : ', data);
        if (data.insertId){
            return res.status(200).send('insert success')
        }
        return res.status(500).send('insert Fail')
    }catch(error){
        return res.status(500).send('error')
    }
    return res.status(200).send('ok')
}

export const updateProduct = async (req, res) => {
    const ProductId = req.body.id
    const payload = {
        productName: req.body.productName,
        productPrice: req.body.productPrice,
        productDesc: req.body.productDesc,
        productImg: req.body.productImg,
        productCategory: req.body.productCategory
    }
    try{
        const data = await new ProductService().update(ProductId, payload);
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

export const deleteProduct = async (req, res) => {
    // สร้างแยกเพราะไม่สามารถ โยน payload เข้าตรงๆได้
    const ProductId = req.body.id

    try{
        const data = await new ProductService().delete(ProductId);
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