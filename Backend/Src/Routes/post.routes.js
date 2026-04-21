const express = require("express");
const postRout = express.Router();
const postModel = require("../Model/post.model")
const multer = require("multer");
const { toFile } = require("@imagekit/nodejs");
const ImageKit = require("@imagekit/nodejs");
const upload = multer({ storage: multer.memoryStorage() });
const jwt = require("jsonwebtoken");
const imagekit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
 });

postRout.post("/post", upload.single("image"), async function (req, res) {
      const token =  req.cookies.jwt_token;
      if(!token) {
        return res.status(401).json({
            "message" :" Unauthorised user"
        })
      }
      let decode ; 
try{
       decode = jwt.verify(token ,process.env.Jwt_Token)
}  
catch(err){
res.status(401).json({
    "message": "unauthorized User"
})
}   
       const result = await imagekit.files.upload({
      file: await toFile(req.file.buffer, req.file.originalname),
      fileName: req.file.originalname,
      folder: "insta_Project_folder",
    });

 const post =await  postModel.create({
    caption : req.body.caption,
    image : result.url,
    user :decode.id
 })

 res.status(201).json({
    "message" : "post Created",
      post: post
 })
});

module.exports = postRout;