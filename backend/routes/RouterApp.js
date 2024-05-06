const express=require('express')
const { createUser } = require('../controller/SignupController')
const { checkuser } = require('../controller/LoginController')

const router=express.Router()

router.post("/signup",createUser)

router.post("/login",checkuser)

module.exports=router