const catchError=require('../utility/catchError')
const Review=require('../models/reviewModel')

const getAllReview=catchError(async(req,res,next)=>{
   const data=await Review.find().populate({
    path:"user"
   }).populate({
    path:"product"
   })

   res.status(200).json({
    status:"success",
    results:data.length,
    data:data
   })
})


const addReview=catchError(async(req,res,next)=>{
  const data=await Review.create(req.body)

  res.status(200).json({
    status:"success",
    data:data
  })
})

module.exports={getAllReview,addReview}