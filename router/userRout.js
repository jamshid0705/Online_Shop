const express=require('express')
const userController=require('../controller/userController')
const auth=require('../controller/authController')

const Rout=express.Router()

Rout.route('/signup').post(auth.signup)
Rout.route('/signin').post(auth.signin)

Rout.route('/').get(userController.getAlluser).post(userController.addUser)
Rout.route('/:id').get(userController.getOneUser)

module.exports=Rout