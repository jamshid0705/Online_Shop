const express=require('express')
const productController=require('../controller/productController')
const Rout=express.Router()

Rout.route("/arra?id").get(productController.getIdProduct);
Rout.route('/').get(productController.getAllProduct).post(productController.addProduct)

module.exports=Rout