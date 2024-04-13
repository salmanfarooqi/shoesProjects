const express=require('express')
const cors=require('cors')
const connectDb = require('./config/db.js')
const userRouter = require('./routers/user.js')
const productRouter = require('./routers/product.js')
const app=express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors());
connectDb()
app.use(userRouter)
app.use(productRouter)
let port=9000
app.listen(port,()=>{

    console.log("server is start on ",port)
    
})