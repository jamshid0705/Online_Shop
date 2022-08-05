const mongoose=require('mongoose')
const sizeSchema=new mongoose.Schema({
  size:{
    type:String,
    required:[true,'Siz size kiriting !'],
    enum:['S','M','L','XS','ML']
  }
})

const size=mongoose.model('sizes',sizeSchema)
module.exports=size