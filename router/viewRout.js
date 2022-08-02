const express=require('express')
const viewController=require('../controller/viewController')

const Rout=express.Router()

Rout.route('/home').get(viewController.mainhome)
Rout.route('/shopmain').get(viewController.mainshop)

module.exports=Rout