import PromotionService from "./promotion.service.js"

export const getPromotion = async (req, res) => {
    try{
        const data = await new PromotionService().getAll();
        console.log(data);
        return res.status(200).send(data)
    }catch(error){
        console.log(error);
        return res.status(500).send('error')
    }
    return res.status(200).send('ok')
}


export const addPromotion = async (req, res) => {
    console.log(req.body)
    try{
        const data = await new PromotionService().insert(req.body);
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

export const updatePromotion = async (req, res) => {
    const PromotiontId = req.body.id
    const payload = {
        promoName: req.body.promoName,
        promoDesc: req.body.promoDesc,
        product_id: req.body.product_id,
        promoDiscount: req.body.promoDiscount,
        promoScoreMember: req.body.promoScoreMember
    }
    try{
        const data = await new PromotionService().update(PromotiontId, payload);
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

export const deletePromotion = async (req, res) => {
    // สร้างแยกเพราะไม่สามารถ โยน payload เข้าตรงๆได้
    const PromotionId = req.body.id

    try{
        const data = await new PromotionService().delete(PromotionId);
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