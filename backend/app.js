const express=require('express')
const DbConnection = require('./config/DbConnection')
const router = require('./routes/RouterApp')
const cors=require('cors')
const app=express()

app.use(express.json())

const PORT=process.env.PORT || 5000

//Database Connection
DbConnection
app.use(cors())
//router
app.use(router)




app.listen(PORT,()=>{
    console.log(`Server Listen in ${PORT}`)
})