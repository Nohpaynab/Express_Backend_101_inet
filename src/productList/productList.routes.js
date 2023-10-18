import { Router } from "express";
import * as ProductListController from "./productList.controller.js"

const router = Router();

router.get('/getProductList',ProductListController.getProList)
router.post('/addProductList',ProductListController.addProList)
router.patch('/updateProductList',ProductListController.updateProList)
router.delete('/deleteProductList',ProductListController.deleteProList)

export default router