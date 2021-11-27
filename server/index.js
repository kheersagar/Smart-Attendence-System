const express = require("express");
const app = express();
const mongoose  = require("mongoose");
const dotenv = require("dotenv").config();

// Email Function
 const email = require('./Email');

const database = require("./mongoDB-connection");
 //connection to mongoDB
database();
app.get("/",(req,res)=>{
  // var mail = ['santparja@gmail.com','khee.ug19cse12@opju.ac.in']; // to send multiple emails
  // mail.toString();
  // var mail = 'santparja@gmail.com';
  // email('sagar',mail);
  res.send("hello");
})
app.listen(process.env.PORT || 8080,()=>{
  console.log(`server started on port  ${process.env.PORT || 8080}` );
});