const Category = require('../models/categoryModel')
const Product=require('../models/productModel')
const Cart=require('../models/cartModel')
const catchError=require('../utility/catchError')

/////////// cart all /////////


//////// main home ///////////
const mainhome=catchError(async(req,res,next)=>{
  let cart
  const category=await Category.find()
  const product1= await Product.find().sort('rating')
  if(req.user){
    cart =await Cart.find({user:req.user.id}).populate('product')
    console.log(cart)
  }
  const product=product1.slice(product1.length-8)
  const productmin = product1.slice(0, -(product1.length - 8));
  res.status(200).render('homeMain',{
     category,
     product,
     productmin,
     cart
  })
})

//////////// main shop ///////////
const mainshop=catchError(async(req,res,next)=>{
   const category = await Category.find();
  //  const cart =await Cart.find({user:req.user.id}).populate('product') 
  const product = await Product.find()
    .populate("size")
    .populate("color")
    .populate("reviews");
  res.status(200).render('shopmain',{
    category,
    product,
    cart
 })
})

/////////// main detail /////////
const maindetail=catchError(async(req,res,next)=>{
   const category = await Category.find();
  //  const cart =await Cart.find({user:req.user.id}).populate('product') 
  const product = await Product.find()
    .populate("size")
    .populate("color")
    .populate("reviews");
  res.status(200).render('detail',{
    category,
    product,
    product1:product[0],
    cart
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
  const cart =await Cart.find({user:req.user.id}).populate('product') 
  console.log(cart[0])
  res.status(200).render('checkout',{
    category,
    cart,
  })
})

const contact=catchError(async(req,res,next)=>{
   const category = await Category.find();
  //  const cart = await Cart.find({ user: req.user.id }).populate("product"); 
  res.status(200).render('contact',{
    category,
    cart
  })
})


const signup=catchError(async(req,res,next)=>{
  const category = await Category.find();
  res.status(200).render('signup',{
    category
  })
})

const signin=catchError(async(req,res,next)=>{
  const category = await Category.find();
  res.status(200).render('signin',{
    category
  })
})

/////////// product id ///////////
const getIdProduct=catchError(async(req,res,next)=>{
  const category = await Category.find();
  const product=await Product.find({category:req.params.id})
  // const cart =await Cart.find({user:req.user.id}).populate('product') 
  console.log(product)
  res.status(200).render('shopmain',{
    product,
    category,
    cart
  })
})

////////////// get id product ////////
const getidproduct=catchError(async(req,res,next)=>{
  const category = await Category.find();
  const product = await Product.find()
  console.log(req.params.id)
  const product1 = await Product.findById(req.params.id).populate("reviews"); 
  // const cart =await Cart.find({user:req.user.id}).populate('product') 
  console.log(product1)
  res.status(200).render("detail", {
    category,
    product,
    product1,
    cart,
  }); 
})




module.exports={mainhome,mainshop,maindetail,cart,checkout,contact,signup,signin,getIdProduct,getidproduct}