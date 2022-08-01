const mongoose=require('mongoose')
const validator=require('validate')

const productSchema=new mongoose.Schema({
  name:{
    type:String,
    required:[true,"Siz name ni kirting !"],
  },
  photo:{
    type:String,
    required:[true,"Siz photo kiriting !"]
  },
  price:{
    type:Number,
    required:[true,'Siz photo kirting !'],
    // validate:{
    //   validator:function(val){
    //     return validator.isInteger(val)
    //   },
    //   message:'Siz pricega butun qiymat kiriting!'
    // }
  },
  rating:{
    type:Number,
  },
  description:{
    type:String,
    required:[true,"Siz description kiriting !"]
  },
  size:{
    type:String,
    required:[true,"Siz size kirting !"]
  },
  color:{
    type:String,
    required:[true,"Siz color kiriting"]
  },
  information:{
    type:String,
  }
})

const Product=mongoose.model('products',productSchema)

module.exports=Product