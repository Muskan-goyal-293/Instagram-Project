const mongoose = require("mongoose");

function connectToDb(){
    mongoose.connect(process.env.Mongoose_Url)
    .then(()=>{
        console.log("connect to database")
    })
    .catch(()=>{
        console.log("not connected")
    })
}

module.exports = connectToDb;