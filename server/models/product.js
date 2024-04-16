const mongoose=require('mongoose')
const productSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    price:{
        type:String,
        require:true
    },

    qunatity:{
        type:String,
        require:true
    },
    description:{
        type:String,
       
    },

    category:{
        type:String,
        enum:['women',"men"],
        require:true
    },
    imageUrl:{
        type:String,
        require:true
    }
})

const Product=mongoose.model("Product",productSchema)

module.exports=Product