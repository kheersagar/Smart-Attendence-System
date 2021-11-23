const express = require("express");
const app = express();
const mongoose  = require("mongoose");
const dotenv = require("dotenv").config();

const database = require("./mongoDB-connection");
 //connection to mongoDB
database();
app.get("/",(req,res)=>{
  res.send("hello");
})
app.listen(process.env.PORT || 8080,()=>{
  console.log(`server started on port   ${process.env.PORT || 8080}` );
});