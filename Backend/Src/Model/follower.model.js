const mongoose = require("mongoose");
const followerSchema =  new mongoose.Schema({
follower : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "usermodel",
    required :[true , 
        "This filed must be require"
    ]
 },

 following:{
    type : mongoose.Schema.Types.ObjectId,
    ref : "usermodel",
    required :[true ,"this filed must be require" ]
 }
}, {timestamps: true})

followerSchema.index({follower :1 ,following :1},{unique :true})


const followerModel = mongoose.model("followermodel" , followerSchema);

module.exports = followerModel