const BoxOffice = require("../model/BoxOffice")

exports.searchController=async(req,res)=>{
    console.log("Search router called")
    console.log(req.params.movieName)
    try {
    const searchData=await BoxOffice.find({movieName:req.params.moviename})
    console.log(searchData.length)
    if(searchData.length>=1){
        res.status(200).json(searchData)
        
    }
    else{
        res.status(200).send("Movie Not Found")
    }
    } catch (error) {
        res.status(500).send("internal server error")
    }
}