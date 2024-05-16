const { type } = require('@testing-library/user-event/dist/type')
const mongoose=require('mongoose')

const BoxOffice=mongoose.model("Boxoffice",new mongoose.Schema({
    movieName:String,
    releaseYear:Date,
    ageLimit:String,
    movieType:String,
    image:String,
    video:String,
    duration:String,
    countryMovie:String,
    description:String,
    quvality:String,
    rating:String,
    director:String,
    cast:String,
    likes:{type:Number,default:0},
    views:{
        type:Number,
        default:0
    }
},{timestamps:true}))

module.exports=BoxOffice