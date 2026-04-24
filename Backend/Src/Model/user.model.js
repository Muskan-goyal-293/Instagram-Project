const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username :{
        required : true,
        unique :[
            true ,
            "this name is already exit"
        ],
        type : String
    },
    email :{
      type : String,
      unique :[true , "email is already exit"],
    required : true 
    },
    bio : {
        type : String
    },
    profile_image:{
        default :"https://ik.imagekit.io/1ris6t5in/everyday-basics-pi9W2dWDdak-unsplash.jpg?updatedAt=1776502136363",
        type : String
    },
    password:{
        type : String,
    required:true
    },
    isPrivate:{
        type : Boolean,
        default : false 
    }
})


const userModel = mongoose.model("usermodel" , userSchema);

module.exports = userModel;