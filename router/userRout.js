const express=require('express')
const userController=require('../controller/userController')

const Rout=express.Router()

Rout.route('/').get(userController.getAlluser).post(userController.addUser)

module.exports=Rout