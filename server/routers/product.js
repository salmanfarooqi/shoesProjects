const express=require('express')
const {productContoller,getAllProducts, getAllMenProducts, getAllWomenProducts, getProductById} = require('../controllers/product')

const app=express()
const productRouter=express.Router()

productRouter.post("/addproduct",productContoller)

productRouter.get("/getproducts",getAllProducts)
productRouter.get("/getmensproducts",getAllMenProducts)
productRouter.get("/getwomensproducts",getAllWomenProducts)
productRouter.get("/ProductDetails/:id", getProductById);

module.exports=productRouter