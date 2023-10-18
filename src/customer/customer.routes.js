import { Router } from "express";
import * as CustomerController from "./customer.controller.js"

const router = Router();

router.get('/getCustomer',CustomerController.getCustomer)
router.post('/addCustomer',CustomerController.addCustomer)
router.patch('/updateCustomer',CustomerController.updateCustomer)
router.delete('/deleteCustomer',CustomerController.deleteCustomer)

export default router