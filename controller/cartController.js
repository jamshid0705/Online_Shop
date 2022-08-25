const catchError = require("../utility/catchError");
const Cart=require('../models/cartModel')

const getAllCart=catchError(async(req,res,next)=>{
  const data=await Cart.find()
  res.status(200).json({
    data:data,
    results:data.lenght
  })
})

const addCart=catchError(async(req,res,next)=>{
  const data=await Cart.create(req.body)

  res.status(200).json({
    data:data
  })
})

module.exports={getAllCart,addCart}