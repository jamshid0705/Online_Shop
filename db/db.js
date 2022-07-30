const mongoose=require('mongoose')
require('dotenv').config({path:'./config.env'})

mongoose.connect(process.env.DATABASE,{}).then(()=>{
  console.log('Database ga ulanish hosil qilindi !')
}).catch(err=>{
  console.log('Database ga ulanishda xatolik !')
})

module.exports=mongoose