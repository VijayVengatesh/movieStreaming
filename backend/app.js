const express=require('express')
const DbConnection = require('./config/DbConnection')
const router = require('./routes/RouterApp')
const path=require('path')
const cors=require('cors')
const app=express()

app.use(express.json())
console.log(path.join(__dirname,"..","src","media"))
// app.use(express.static(path.join(__dirname,"public")))
app.use(express.static(path.join(__dirname,"..","src","media")))
app.use(express.urlencoded({extended:false}))

const PORT=process.env.PORT || 5000

//Database Connection
DbConnection
app.use(cors())
app.use(require('../backend/controller/BoxofficeController').uploder,router)




app.listen(PORT,()=>{
    console.log(`Server Listen in ${PORT}`)
})