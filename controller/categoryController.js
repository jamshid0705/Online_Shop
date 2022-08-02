const catchError=require('../utility/catchError')
const Category=require('../models/categoryModel')

const getAllcategory=catchError(async(req,res,next)=>{
  const data=await Category.find()

  res.status(200).json({
    status:"succuss",
    results:data.length,
    data:data
  })
})

const addcategory=catchError(async(req,res,next)=>{
  const data=await Category.create([
    {
      "name":"Dresses",
      "image":"cat-1.jpg",
      "product":900
    },
    {
      "name":"Gadgets",
      "image":"cat-2.jpg",
      "product":600
    },
    {
      "name":"Shouses",
      "image":"cat-3.jpg",
      "product":990
    },
    {
      "name":"Perfumery",
      "image":"cat-4.jpg",
      "product":990
    }
  ])

  res.status(200).json({
    status:'success',
    data:data
  })
})

module.exports={getAllcategory,addcategory}