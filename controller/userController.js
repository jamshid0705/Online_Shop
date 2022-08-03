const catchError=require('../utility/catchError')
const User=require('../models/userModel')

///////////// get all
const getAlluser=catchError(async(req,res,next)=>{
  const data=await User.find()

  res.status(200).json({
    results:data.length,
    status:"success",
    user:data
  })
})
///////////// get one
const getOneUser=catchError(async(req,res,next)=>{
  const data=await User.findById(req.params.id)

  res.status(200).json({
    status:'success',
    data:data
  })
})
///////////// add user
const addUser=catchError(async(req,res,next)=>{
  console.log(req)
  const data=await User.create(req.body)

  res.status(200).json({
    status:"success",
    data:data
  })
})

module.exports={getAlluser,addUser,getOneUser}