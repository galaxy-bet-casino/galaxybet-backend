require("dotenv").config();
const mongoose = require("mongoose");

const dbConnection = async()=>{
    await mongoose.connect(process.env.MONGO_URI,{});
}

dbConnection()
.catch((err)=>{console.error(err)})
.then(()=>{console.log("MongoDB Connected✅✅")});

module.exports = dbConnection;