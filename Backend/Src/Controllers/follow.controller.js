const jwt = require("jsonwebtoken");
const usermodel = require("../Model/user.model");
const followermodel = require("../Model/follower.model");

// Follow function

async function followfunction (req, res) {
  try {
    const token = req.cookies.jwt_token;

    if (!token) {
      return res.status(401).json({
        message: "unauthorized user"
      });
    }

    const decode = jwt.verify(token, process.env.Jwt_Token);

    // self follow check
    if (decode.id === req.params.id) {
      return res.status(400).json({
        message: "You cannot follow yourself"
      });
    }

    // check user exists
    const user = await usermodel.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    // duplicate follow check
    const existing = await followermodel.findOne({
      follower: decode.id,
      following: req.params.id
    });

    if (existing) {
      return res.status(400).json({
        message: "Already followed"
      });
    }
      
    const follow = await followermodel.create({
      follower: decode.id,
      following: req.params.id
    });

    res.status(201).json({
      message: "Follow process complete",
      follow
    });

  } catch (err) {
    res.status(500).json({
      message: "Server error",
      error: err.message
    });
  }
}


// Unfollow user async(req,res) =>{
   
async function unfollowfunction (req,res){
   
    const token = req.cookies.jwt_token;

    if (!token) {
      return res.status(401).json({
        message: "unauthorized user"
      });
    }

    const decode = jwt.verify(token, process.env.Jwt_Token);
     
    const existing =await  followermodel.findOne({
      follower : decode.id,
      following : req.params.id 
    })

    if(!existing){
        return res.status(200).json({
            "message" : " you can not follow"
        }) 
    }

   const deleteFollower = await followermodel.findByIdAndDelete(req.params.id);

   res.status(204);

   console.log("delete successfully")

}


module.exports ={ followfunction , unfollowfunction}