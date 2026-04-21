const  mongoose  = require("mongoose");


const postSchema = new mongoose.Schema({
    caption:{
        type :String,
        default :""
    },
    image :{
        type : String,
        required :[true ," Image must be need"]
    },
    user:{
     type : mongoose.Schema.Types.ObjectId,
     required : true,
    }
})


const postModel = mongoose.model("postSchema" , postSchema);


module.exports = postModel;