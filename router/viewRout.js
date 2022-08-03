const express=require('express')
const viewController=require('../controller/viewController')
const authController=require('../controller/authController')

const Rout=express.Router()

Rout.route('/home').get(authController.isSignIn,viewController.mainhome)
Rout.route('/shopmain').get(viewController.mainshop)
Rout.route('/detail').get(viewController.maindetail)
Rout.route('/cart').get(viewController.cart)
Rout.route('/checkout').get(viewController.checkout)
Rout.route('/contact').get(viewController.contact)
Rout.route('/signup').get(viewController.signup)
Rout.route('/signin').get(viewController.signin)

module.exports=Rout