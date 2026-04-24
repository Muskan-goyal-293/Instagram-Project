const userModel = require("../Model/user.model");
const express = require("express");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const  postMiddleware = require("../Middleware/post.middleware")
async function register (req, res) {
  const { username, email, password, bio, profile_image } = req.body;
  const isUserExit = await userModel.findOne({
    $or: [{ email }, { username }],
  });

  if (isUserExit) {
    return res.status(409).json({
      message: "user already exit",
    });
  }

  let hash = crypto.createHash("sha256").update(password).digest("hex");

  const user = await userModel.create({
    username,
    password: hash,
    email,
    bio,
    profile_image,
    isPrivate
  });

  const jwt_token = jwt.sign(
    {
      id: user._id,
    },
    process.env.Jwt_Token,
  );

  res.cookie("jwt_token", jwt_token);

  res.status(201).json({
    message: "Create Account",
    name: username,
  });
}



// login function

async function login (req, res) {
  const { username, password, email } = req.body;
  const isUserDetailMatch = await userModel.findOne({
    $or: [{ username }, { email }],
  });

  if (!isUserDetailMatch) {
    return res.status(401).json({
      message: "Invalid name or email",
    });
  }

  const isPasswordMatch =
    crypto.createHash("sha256").update(password).digest("hex") ===
    isUserDetailMatch.password;

  if (!isPasswordMatch) {
    return res.status(401).json({
      Message: "Wrong Password",
    });
  }

  const jwt_token = jwt.sign(
    {
      id: isUserDetailMatch._id,
    },
    process.env.Jwt_Token,

);

  res.cookie("jwt_token", jwt_token);

  res.status(200).json({
    Message: "Successfully Login",
  });
}

// privatePublicAccount

async function privatePublicAccount(req,res){
const id = req.user.id;

const isExit = await userModel.findById(id);
if(!isExit){
  return res.status(401).json({
    "message" : "unauthorized user"
  })
}
const { isPrivate} = req.body;

if(typeof(isPrivate) !== "boolean"){
  return res.status(401).json({
    "message" : "type must be true of false"
  })
}


const updateUserProfile = await userModel.findByIdAndUpdate(id,{
  isPrivate : isPrivate
})

return res.status(200).json({
  "message" : "user account update"
})

}


module.exports ={register , login ,privatePublicAccount}