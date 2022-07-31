const mongoose=require('mongoose')
const validator=require('validator')

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
  photo:{
    type:String,
    required:[true,"Siz photo kiriting"]
  }
})

const user=mongoose.model('users',userschema)

module.exports=user