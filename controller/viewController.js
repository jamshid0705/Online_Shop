const Category = require('../models/categoryModel')
const Product=require('../models/productModel')
const catchError=require('../utility/catchError')

//////// main home ///////////
const mainhome=catchError(async(req,res,next)=>{
  const category=await Category.find()
  const product1= await Product.find().sort('rating')
  const product=product1.slice(product1.length-8)
  const productmin = product1.slice(0, -(product1.length - 8));
  res.status(200).render('homeMain',{
     category,
     product,
     productmin
  })
})

//////////// main shop ///////////
const mainshop=catchError(async(req,res,next)=>{
   const category = await Category.find();
  const product = await Product.find()
    .populate("size")
    .populate("color")
    .populate("reviews");
  res.status(200).render('shopmain',{
    category,
    product
 })
})

/////////// main detail /////////
const maindetail=catchError(async(req,res,next)=>{
   const category = await Category.find();
  const product = await Product.find()
    .populate("size")
    .populate("color")
    .populate("reviews");
  res.status(200).render('detail',{
    category,
    product,
    product1:product[0],
  })
})

//////////// main cart ///////////
const cart=catchError(async(req,res,next)=>{
   const category = await Category.find();
  const product = await Product.find()
    .populate("size")
    .populate("color")
    .populate("reviews");
  res.status(200).render('cart',{
    category,
    product
  })
})
/////////// checkout //////////
const checkout=catchError(async(req,res,next)=>{
   const category = await Category.find();
  res.status(200).render('checkout',{
    category
  })
})

const contact=catchError(async(req,res,next)=>{
   const category = await Category.find();
  res.status(200).render('contact',{
    category
  })
})


const signup=catchError(async(req,res,next)=>{
  res.status(200).render('signup')
})

const signin=catchError(async(req,res,next)=>{
  res.status(200).render('signin')
})

/////////// product id ///////////
const getIdProduct=catchError(async(req,res,next)=>{
  const category = await Category.find();
  const product=await Product.find({category:req.params.id})
  console.log(product)
  res.status(200).render('shopmain',{
    product,
    category
  })
})

////////////// get id product ////////
const getidproduct=catchError(async(req,res,next)=>{
  const category = await Category.find();
  const product = await Product.find()
  console.log(req.query.id)
  const product1 = await Product.findById(req.query.id).populate("reviews"); 
  console.log(product1)
  res.status(200).render("detail", {
    category,
    product,
    product1,
  }); 
})



module.exports={mainhome,mainshop,maindetail,cart,checkout,contact,signup,signin,getIdProduct,getidproduct}