const express=require('express')
const viewController=require('../controller/viewController')
const authController=require('../controller/authController')

const Rout=express.Router()

Rout.route('/home').get(authController.isSignIn,viewController.mainhome)
Rout.route('/shopmain').get(authController.isSignIn,viewController.mainshop)
Rout.route('/detail').get(authController.isSignIn,viewController.maindetail)
Rout.route('/cart').get(authController.isSignIn,viewController.cart)
Rout.route('/checkout').get(authController.isSignIn,viewController.checkout)
Rout.route('/contact').get(authController.isSignIn,viewController.contact)
Rout.route('/signup').get(viewController.signup)
Rout.route('/signin').get(viewController.signin)

module.exports=Rout