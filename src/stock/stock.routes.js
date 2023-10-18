import { Router } from "express";
import * as StockController from "./stock.controller.js"

const router = Router();

router.get('/getStock',StockController.getStock)
router.post('/addStock',StockController.addStock)
router.patch('/updateStock',StockController.updateStock)
router.delete('/deleteStock',StockController.deleteStock)

export default router