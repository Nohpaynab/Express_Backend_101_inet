import  express  from "express";
import customerRouter from "./customer/customer.routes.js"
import employeeRouter from "./employee/employee.routes.js"
import productRouter from "./product/product.routes.js"
import productListRouter from "./productList/productList.routes.js"
import promotionRouter from "./promotion/promotion.routes.js"
import receiptRouter from "./receipt/receipt.routes.js"
import receiptPromotionRouter from "./receiptPromotion/receiptPromotion.routes.js"
import stockRouter from "./stock/stock.routes.js"

const app = express();
const port = 8000

app.use(express.json()) // ให้ express อ่าน json ได้
app.use(express.urlencoded({extended:true}))

app.use('/api/customer', customerRouter)
app.use('/api/employee', employeeRouter)
app.use('/api/product', productRouter)
app.use('/api/productList', productListRouter)
app.use('/api/promotion', promotionRouter)
app.use('/api/receipt', receiptRouter)
app.use('/api/receiptPro', receiptPromotionRouter)
app.use('/api/stock', stockRouter)



app.get('/get', (req, res) =>{
    res.send('Hello World')
})

app.listen(port, () => {
    console.log(`server listening on port At ${port}`);
})