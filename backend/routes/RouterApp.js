
const { createUser } = require('../controller/SignupController')
const { checkuser } = require('../controller/LoginController')
const { insert, getBoxOfficeMovies, viewsIncrement, findSingleMoovie, popularMovies, likesIncrement, likesdecrement } = require('../controller/BoxofficeController')
const express=require('express')
const router=express.Router()


router.post("/signup",createUser)

router.post("/login",checkuser)

router.post("/movieinsert",insert)
router.get('/getboxofficemovies',getBoxOfficeMovies)

//view increment

router.put("/viewsincrement/:id",viewsIncrement)

router.put("/likeincrement/:id",likesIncrement)

router.put("/likedecrement/:id",likesdecrement)

router.get('/findsinglemovie/:id',findSingleMoovie)

router.get("/popularmovies",popularMovies)
module.exports=router