const express=require('express')
const {signUpController,loginController} = require('../controllers/user.js')
// const loginController=require('../controllers/user.js')
const app=express()
const userRouter=express.Router()

userRouter.post("/signup",signUpController)
userRouter.post("/login",loginController)

module.exports=userRouter