const express=require('express')
const {productContoller,getAllProducts, getAllMenProducts, getAllWomenProducts, getProductById} = require('../controllers/product')

const app=express()
const productRouter=express.Router()

productRouter.post("/addproduct",productContoller)

productRouter.get("/",getAllProducts)
productRouter.get("/getmensproducts",getAllMenProducts)
productRouter.get("/getwomensproducts",getAllWomenProducts)
productRouter.get("/getproductById/:id", getProductById);


module.exports=productRouter