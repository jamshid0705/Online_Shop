const express=require('express')
const reviewController=require('../controller/reviewController')
const Rout=express.Router()

Rout.route('/').get(reviewController.getAllReview).post(reviewController.addReview).delete(reviewController.deleteR)

module.exports=Rout