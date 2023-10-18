import { Router } from "express";
import * as ProductController from "./product.controller.js"

const router = Router();

router.get('/getProduct',ProductController.getProduct)
router.post('/addProduct',ProductController.addProduct)
router.patch('/updateProduct',ProductController.updateProduct)
router.delete('/deleteProduct',ProductController.deleteProduct)

export default router