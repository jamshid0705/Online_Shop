const catchError=require('../utility/catchError')
const Product=require('../models/productModel')

const getAllProduct=catchError(async(req,res,next)=>{
  const data=await Product.find()

  res.status(200).json({
    status:"succuss",
    results:data.length,
    data:data
  })
})

const addProduct=catchError(async(req,res,next)=>{
  const data=await Product.create(req.body)

  res.status(200).json({
    status:'success',
    data:data
  })
})

module.exports={getAllProduct,addProduct}