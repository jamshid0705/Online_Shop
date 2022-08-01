const express=require('express')
const categoryController=require('../controller/categoryController')
const Rout=express.Router()

Rout.route('/').get(categoryController.getAllcategory).post(categoryController.addcategory)

module.exports=Rout