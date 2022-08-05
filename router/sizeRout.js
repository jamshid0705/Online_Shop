const express=require('express')
const Rout=express.Router()
const sizeController=require('../controller/sizeController')

Rout.route('/').get(sizeController.getAll).post(sizeController.add)

module.exports=Rout