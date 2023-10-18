import { Router } from "express";
import * as EmployeeController from "./employee.controller.js"

const router = Router();

router.get('/getEmployee',EmployeeController.getEmployee)
router.post('/addEmployee',EmployeeController.addEmployee)
router.patch('/updateEmployee',EmployeeController.updateEmployee)
router.delete('/deleteEmployee',EmployeeController.deleteEmployee)

export default router