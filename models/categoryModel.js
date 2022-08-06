const mongoose=require('mongoose')

const categorySchema=new mongoose.Schema({
  name:{
    type:String,
    required:[true,"Siz category name kiriting"]
  },
  image:{
    type:String,
    required:[true,"Siz category images kiriting"]
  },
  product:{
    type:Number,
    required:[true,"Siz category product kiriting"]
  }
},{
  toJSON:{virtuals:true},
  toObject:{virtuals:true}
})

categorySchema.virtual("products", {
  ref: "products",
  localField: "_id",
  foreignField: "category",
});

const Category=mongoose.model('gategories',categorySchema)

module.exports=Category