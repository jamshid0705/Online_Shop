const Category = require('../models/categoryModel')
const Product=require('../models/productModel')
const catchError=require('../utility/catchError')

const mainhome=catchError(async(req,res,next)=>{
  const category=await Category.find()
  const product=await Product.find()
  // console.log(product)
  res.status(200).render('homeMain',{
     category,
     product
  })
})

const mainshop=catchError(async(req,res,next)=>{
  const product=await Product.find()
  res.status(200).render('shopmain',{
    product
 })
})

module.exports={mainhome,mainshop}