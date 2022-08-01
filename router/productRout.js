const express=require('express')
const productController=require('../controller/productController')
const Rout=express.Router()

Rout.route('/').get(productController.getAllProduct).post(productController.addProduct)

module.exports=Rout