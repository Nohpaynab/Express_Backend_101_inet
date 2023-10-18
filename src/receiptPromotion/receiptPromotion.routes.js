import { Router } from "express";
import * as ReceiptPromotionController from "./receiptPromotion.controller.js"

const router = Router();

router.get('/getRecPro',ReceiptPromotionController.getRecPro)
router.post('/addRecPro',ReceiptPromotionController.addRecPro)
router.patch('/updateRecPro',ReceiptPromotionController.updateRecPro)
router.delete('/deleteRecPro',ReceiptPromotionController.deleteRecPro)

export default router