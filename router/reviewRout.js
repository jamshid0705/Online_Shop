const express=require('express')
const reviewController=require('../controller/reviewController')
const Rout=express.Router()

Rout.route('/').get(reviewController.getAllReview).post(reviewController.addReview)

module.exports=Rout