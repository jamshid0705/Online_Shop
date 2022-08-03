const express=require('express')
const appError = require('./utility/appError')
const userRout=require('./router/userRout')
const productRout=require('./router/productRout')
const reviewRout=require('./router/reviewRout')
const categoryRout=require('./router/categoryRout')
const viewRout=require('./router/viewRout')
const cookieParser=require('cookie-parser')
const path=require('path')

const app=express()

app.use(express.json())
app.use(cookieParser())

app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))
app.use(express.static(path.join(__dirname,'public')))

app.use('/',viewRout)
app.get('/',(req,res)=>{
  res.status(200).render('base')
})
app.use('/api/v1/users',userRout)
app.use('/api/v1/reviews',reviewRout)
app.use('/api/v1/products',productRout)
app.use('/api/v1/categories',categoryRout)

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
