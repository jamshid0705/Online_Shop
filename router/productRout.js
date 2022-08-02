const express=require('express')
const productController=require('../controller/productController')
const Rout=express.Router()

Rout.route('/').get(productController.getAllProduct).post(productController.addProduct)
Rout.route('/:id').get(productController.getIdProduct)

module.exports=Rout