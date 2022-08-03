const mongoose=require('mongoose')
const validator=require('validator')
const bcrypt=require('bcrypt')

const userschema=new mongoose.Schema({
  name:{
    type:String,
    required:[true,'Siz user name kiriting !']
  },
  email:{
    type:String,
    required:[true,'Siz email kiritishingiz kerak!'],
    unique:[true,"Bunday email mavjud"],
    validate:{
      validator:function(val){
        return validator.isEmail(val)
      },message:'Siz to\'g\'ri email kiriting!'
    }
  },
  role:{
    type:String,
    required:[true,"Siz role kiriting !"],
    default:"user",
    enum:['user','admin','lead-guide']
  },
  password:{
    type:String,
    required:[true,"Siz password kiriting"],
    validate:{validator:function(val){
      return validator.isStrongPassword(val)
    },message:'Siz kuchliroq password kiriting'}
  },
  passwordConfirm:{
    type:String,
    required:[true,"Siz passwordni qayta kiritishingiz kerak"],
    validate:{
      validator:function(val){
        return val===this.password
      },message:"Passwordni qayta kiriting"
    }
  }
})

userschema.pre('save',async function(next){
  if(!this.isModified('password')){
    return next()
  }

  const hashlangan=await bcrypt.hash(this.password,14)
  this.password=hashlangan
  this.passwordConfirm=undefined
})

const user=mongoose.model('users',userschema)

module.exports=user