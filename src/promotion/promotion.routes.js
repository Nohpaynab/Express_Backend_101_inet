import { Router } from "express";
import * as PromotionController from "./promotion.controller.js"

const router = Router();

router.get('/getPromotion',PromotionController.getPromotion)
router.post('/addPromotion',PromotionController.addPromotion)
router.patch('/updatePromotion',PromotionController.updatePromotion)
router.delete('/deletePromotion',PromotionController.deletePromotion)

export default router