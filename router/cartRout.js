const express=require('express')
const Rout=express.Router()
const cartController=require('../controller/cartController')

Rout.route('/').get(cartController.getAllCart).post(cartController.addCart)
module.exports=Rout