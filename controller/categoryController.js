const catchError=require('../utility/catchError')
const Category=require('../models/categoryModel')

const getAllcategory=catchError(async(req,res,next)=>{
  const data=await Category.find()
  res.status(200).json({
    status:"succuss",
    results:data.length,
    data:data,
  })
})

const addcategory=catchError(async(req,res,next)=>{
  const data = await Category.create([
    {
      name: "gadgets",
      image: "cat-2.jpg",
      product: 600,
    },
    {
      name: "shouses",
      image: "cat-3.jpg",
      product: 990,
    },
    {
      name: "shirts",
      image: "cat-4.jpg",
      product: 990,
    },
  ]);

  res.status(200).json({
    status:'success',
    data:data
  })
})

const getId=catchError(async(req,res,next)=>{
  const data=await Category.findById(req.params.id).populate('products')
  res.status(200).json({
    data:data
  })
})

module.exports={getAllcategory,addcategory,getId}