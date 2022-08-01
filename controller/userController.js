const catchError=require('../utility/catchError')
const User=require('../models/userModel')

const getAlluser=catchError(async(req,res,next)=>{
  const data=await User.find()

  res.status(200).json({
    status:"success",
    user:data
  })
})

const addUser=catchError(async(req,res,next)=>{
  console.log(req)
  const data=await User.create(req.body)

  res.status(200).json({
    status:"success",
    data:data
  })
})

module.exports={getAlluser,addUser}