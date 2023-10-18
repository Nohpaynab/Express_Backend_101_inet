import { Router } from "express";
import * as ReceiptController from "./receipt.controller.js"

const router = Router();

router.get('/getReceipt',ReceiptController.getReceipt)
router.post('/addReceipt',ReceiptController.addReceipt)
router.patch('/updateReceipt',ReceiptController.updateReceipt)
router.delete('/deleteReceipt',ReceiptController.deleteReceipt)

export default router