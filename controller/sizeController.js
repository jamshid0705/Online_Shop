const catchError = require("../utility/catchError");
const Size=require('../models/sizeModel')

const getAll=catchError(async(req,res,next)=>{
  const data=await Size.find()

  res.status(200).json({
    data:data
  })
})

const add=catchError(async(req,res,next)=>{
  const data = await Size.create([
    {
      size: "M",
    },
    {
      size: "S",
    },
    {
      size: "L",
    },
    {
      size: "XS",
    },
    {
      size: "ML",
    },
  ]);

  res.status(200).json({
    data:data
  })
})

module.exports={getAll,add}