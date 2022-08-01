const mongoose=require('mongoose')

const reviewSchema=new mongoose.Schema({
  review:{
    type:String,
    required:[true,"Siz review kiriting !"]
  },
  product:{
    type:mongoose.Schema.ObjectId,
    ref:'products'
  },
  user:{
    type:mongoose.Schema.ObjectId,
    ref:'users'
  },
  rating:{
    type:Number,
    min:1,
    max:5,
  },
  createAt:{
    type:Date,
    default:Date.now()
  }
})

const Reviews=mongoose.model('reviews',reviewSchema)

module.exports=Reviews