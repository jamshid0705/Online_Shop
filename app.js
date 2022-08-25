const express=require('express')
const appError = require('./utility/appError')
const userRout=require('./router/userRout')
const productRout=require('./router/productRout')
const reviewRout=require('./router/reviewRout')
const categoryRout=require('./router/categoryRout')
const viewRout=require('./router/viewRout')
const sizeRout=require('./router/sizeRout')
const colorRout=require('./router/colorRout')
const cartRout=require('./router/cartRout')
const cookieParser=require('cookie-parser')
const path=require('path')
require('dotenv').config({path:'./config.env'})

const app=express()

//////////////////////////////////// sign up with google ////////////////////////////////////

const session = require("express-session");
const passport = require("passport");
const User=require('./models/userModel')
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const {createToken,saveTokenCookie}=require('./controller/authController')

let userProfile
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CLIENT_URL,
      passReqToCallback: true,
    },
    function (request, accessToken, refreshToken, profile, done) {
      userProfile=profile
      return done(null, userProfile);
    }
  )
);


app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: "SECRET",
  })
);


app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

app.get("/success", (req, res) => res.send(userProfile));
app.get("/error", (req, res) => res.send("error logging in"));


app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/error" }),
  async(req, res)=>{
    try {
      // Successful authentication, redirect success.
      const data = await User.create({
        name: userProfile.displayName,
        email: userProfile.email,
      });
      const token = createToken(data._id);

      saveTokenCookie(token, res, req);
      console.log(data);
      res.redirect("/home");
    } catch (error) {
      let err='Bu user orqali ro\'yhatdan o\'tilgan !'
      res.render('error',{
        err
      })
    }
    
  }
);

/////////////////////////////////////////////////////////////////////////////////////////////
app.use(express.json())
app.use(cookieParser())

app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))
app.use(express.static(path.join(__dirname,'public')))

app.use('/',viewRout)
app.use('/pro',viewRout)
app.get('/',(req,res)=>{
  res.status(200).render('base')
})
app.use('/api/v1/carts',cartRout)
app.use('/api/v1/users',userRout)
app.use('/api/v1/reviews',reviewRout)
app.use('/api/v1/products',productRout)
app.use('/api/v1/categories',categoryRout)
app.use('/api/v1/size',sizeRout)
app.use('/api/v1/color',colorRout)

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
