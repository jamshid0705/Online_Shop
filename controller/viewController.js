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

const maindetail=catchError(async(req,res,next)=>{
  const product=await Product.find().populate('reviews')
  res.status(200).render('detail',{
    product
  })
})

const cart=catchError(async(req,res,next)=>{
  const product=await Product.find()
  res.status(200).render('cart',{
    product
  })
})

const checkout=catchError(async(req,res,next)=>{
  res.status(200).render('checkout')
})

const contact=catchError(async(req,res,next)=>{
  res.status(200).render('contact')
})


const signup=catchError(async(req,res,next)=>{
  res.status(200).render('signup')
})

const signin=catchError(async(req,res,next)=>{
  res.status(200).render('signin')
})

module.exports={mainhome,mainshop,maindetail,cart,checkout,contact,signup,signin}