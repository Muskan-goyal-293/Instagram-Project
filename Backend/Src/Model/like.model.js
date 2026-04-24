const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema({
    post:{
     type : String,
     require : [true ,"This filed is require"]
    },
    user: {
    type : mongoose.Schema.Types.ObjectId,
    require :[true ,"user must be require"],
    ref : "usermodel"
    },
},{
    timestamps : true
})

likeSchema.index({post :1 , user :1} , {unique : true})


const likeModel =  mongoose.model ("likeModel" , likeSchema);

module.exports = likeModel
