require("dotenv").config();
const express = require('express')
const mongoose = require('mongoose')

const app = express();

// middlewire
app.use(express.json());
app.use((req,res,next)=>{
    console.log(req.path , req.method)
    next()
})

// // Available Routes
// app.use("api/ecommmerce", )

// connect to db
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
         //listen for req
         app.listen(process.env.PORT,()=>{
         console.log("listening on port",process.env.PORT)
     })
})
.catch((err)=>{
    console.log(err)
})