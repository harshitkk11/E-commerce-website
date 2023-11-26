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
  .then(() => {
    //listen for request
    app.listen(process.env.PORT, () => {
      console.log(" connected to db and listening on port", process.env.PORT);
    })
  })
  .catch((error) => {
    console.log(error)
  })