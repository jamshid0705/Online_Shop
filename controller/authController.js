const User=require('../models/userModel')
const catchError = require("../utility/catchError");
const jwt=require('jsonwebtoken');
const appError = require("../utility/appError");
const bcrypt=require('bcrypt');

/// create token
const createToken= function(id){
  return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:process.env.JWT_EXPIRES_IN})
}

// /////////// cookie /////////////
const saveTokenCookie=(token,res,req)=>{
  res.cookie('jwt',token,{
    maxAge:process.env.JWT_EXPIRES_DATA*24*60*60*1000,  // nechi kun berish vaqti token
    httpOnly:true,
    secure:req.protocol==='https'? true:false
  })
}
///////////////////////// sign up //////////////////////////

const signup= catchError(async(req,res,next)=>{
  const newUser=await User.create({
    name:req.body.name,
    email:req.body.email,
    password:req.body.password,
    role:req.body.role,
    passwordConfirm:req.body.passwordConfirm
  })

 const token=createToken(newUser._id)

 saveTokenCookie(token,res,req)

  res.status(200).json({
    status:'success',
    token:token,
    data:newUser
  })
})

/////////// sign in /////////
const signin=catchError(async(req,res,next)=>{
  const {email,password}=req.body
  if(!email && !password){
    next(new appError('siz email bilan password kiritishingiz kerak !',404))
  }

  const user=await User.findOne({email:email}).select('+password')
  if(!user){
    return next(new appError('Bunday user mavjud emas !',404))
  }

  // console.log(await bcrypt.compare(password,user.password))
  if(!(await bcrypt.compare(password,user.password))){
    return next(new appError('Password ni togri kirting!',404))
  }

  const token=createToken(user._id)

  saveTokenCookie(token,res,req)

  res.status(200).json({
    status:'success',
    token:token
  })
})

///////////// protect /////////////////

const protect=catchError(async(req,res,next)=>{
  let token
  if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
    token=req.headers.authorization.split(' ')[1]
  }

  else if(req.cookies.jwt){
    token=req.cookies.jwt
  }

  if(!token || token===null){
    return next(new appError('sizning tokeningiz notogri !',404))
  }

  const tokencha=jwt.verify(token,process.env.JWT_SECRET)

  const user=await User.findOne({_id:tokencha.id})

  if(!user){
    return next(new appError('Bunday user mavjud emas !',404))
  }

  if(token){
    // console.log(Date.now()/1000)
    // console.log(tokencha.exp)
    if(tokencha.exp<=Date.now()/1000){
      return next(new appError('Tokenning vaqti tugagan !',404))
    }
  }

  req.user=user
  res.locals.user=user 
  next()
})

/////////////// isSignin //////////////////
const isSignIn= async (req, res,next) => {
  
  if(req.cookies.jwt){  // client tomonidan kelayotgan cookieni olish
    console.log(req.cookies.jwt)
    const token=req.cookies.jwt
    const tokencha=jwt.verify(token,process.env.JWT_SECRET)

    const user=await User.findOne({_id:tokencha.id})
    res.locals.user=user
    return next()
  }
  if(!req.cookies.jwt){
    res.locals.user=undefined // pugga userni berish malumotlarni
    return next()
  }
   
};

////////// role ////////////

const role=(roles)=>{
  return (req,res,next)=>{
    if(!roles.includes(req.user.role)){
      return next(new appError('Siz budnay huquqga ega emassiz !',404))
    }
    next()
  }
}







module.exports={signup,signin,protect,role,isSignIn}