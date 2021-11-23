const mongoose  = require("mongoose");
const dotenv = require("dotenv").config();

 function mongoDB(){
  mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.ineve.mongodb.net/Sas?retryWrites=true&w=majority`);
  const db = mongoose.connection;
  db.on('error',()=>{
    console.log("error while connecting to mongoDB");
  });
  db.once('open',()=>{
    console.log("connected to MongoDb");
  })
}
module.exports  = mongoDB;