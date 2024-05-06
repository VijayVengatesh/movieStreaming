const mongoose=require("mongoose")

dbUrl="mongodb://localhost:27017/netflix"

const DbConnection=mongoose.connect(dbUrl)
.then(()=>{
    console.log("Database Connected Successfully")
})
.catch(err=>{
    console.error("Database Connection error",err.message)
})

module.exports=DbConnection
