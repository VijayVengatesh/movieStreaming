
const { createUser, userWithBoxoffice, findUserWithMovies } = require('../controller/SignupController')
const { checkuser } = require('../controller/LoginController')
const { insert, getBoxOfficeMovies, viewsIncrement, findSingleMoovie, popularMovies, likesIncrement, likesdecrement, trendingMovies, newSeasonActionMovies, newSeasonDramaMovies, newSeasonRomanceMovies, relatedMovies, upCommingMovies } = require('../controller/BoxofficeController')
const express=require('express')
const { searchController } = require('../controller/SearchController')
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

router.get("/trendingmovies",trendingMovies)
router.get("/newseasonactionmovies",newSeasonActionMovies)
router.get("/newseasondramamovies",newSeasonDramaMovies)
router.get("/newseasonromancemovies",newSeasonRomanceMovies)


router.post("/userwithboxoffice/:movieId",userWithBoxoffice)

router.get("/finduserwithmovies/:userId",findUserWithMovies)

router.get("/upcommingmovies",upCommingMovies)
router.get("/relatedmovies/:movieType",relatedMovies)


router.post("/search/:moviename",searchController)
module.exports=router