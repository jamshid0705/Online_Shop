const express=require('express')
const appError = require('./utility/appError')
const userRout=require('./router/userRout')

const app=express()

app.use('/api/v1/users',userRout)

app.all('*',function(req,res,next){
   next(new appError('Not page ! ',404))
})

app.use((err,req,res,next)=>{
  err.status=err.status || 'Fail'
  err.statusCode=err.statusCode || 404
  err.message=err.message || 'Not found !'

  if(process.env.NODE_CODE==='DEVELOPMENT'){
    res.status(err.statusCode).json({
      status:err.status,
      statusCode:err.statusCode,
      message:err.message,
      stack:err.stack
    })
  }

  if(process.env.NODE_CODE==='PRODUCTION'){
    res.status(err.statusCode).json({
      status:err.status,
      message:err.message
    })
  }
})

module.exports=app
