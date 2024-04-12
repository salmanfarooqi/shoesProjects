const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        
    },
    email:{
        type:String,
        require:true
    },

    password:{
        type:String,
        require:true
    }
    
})


const User=mongoose.model("Users",userSchema)

module.exports=User;