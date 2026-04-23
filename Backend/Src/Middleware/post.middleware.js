const jwt = require("jsonwebtoken");

function postMiddleware(req ,res, next){
const token =  req.cookies.jwt_token;
      if(!token) {
        return res.status(401).json({
            "message" :" Unauthorized user"
        })
      }
      let decode ; 
try{
       decode = jwt.verify(token ,process.env.Jwt_Token)
}  
catch(err){
return  res.status(401).json({
    "message": "unauthorized User"
})
}   

req.user  = decode;
next()
}
module.exports = postMiddleware;