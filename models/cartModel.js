const mongoose=require('mongoose')

const cartSchema=new mongoose.Schema({
  soni:{
    type:String,
  },
  user:{
    type:String,
  },
  product:{
    type:mongoose.Schema.ObjectId,
    ref:'products'
  }

})
const cart=mongoose.model('carts',cartSchema)
module.exports=cart