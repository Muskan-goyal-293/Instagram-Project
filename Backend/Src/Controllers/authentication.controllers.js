// require modules
const userModel = require("../Model/user.model");
const jwt = require("jsonwebtoken");
const postMiddleware = require("../Middleware/post.middleware");
const bcrypt = require("bcrypt");

/* @description   this is register function 
 => check  user already exit  => if  user exit then return
 => if not exit then register
*/

async function register(req, res) {
  try {
    const { username, email, password, bio, confirmPassword, isPrivate } =
    req.body;

    const isUserExit = await userModel.findOne({
      $or: [{ email }, { username }],
    });

    if (isUserExit) {
      return res.status(409).json({
        message: "User already exits",
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({
        message: "Wrong password",
      });
    }
 
    const hash = await bcrypt.hash(password, 10);

    const user = await userModel.create({
      username,
      password: hash,
      email,
      bio, 
      isPrivate,
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
  } catch (err) {
    console.log(err);
  }
}

/* login function
check user is register or not  if register then enter email , name password and login
=> if information is wrong then exit
*/

async function login(req, res) {
  const { username, password, email } = req.body;
  const isUserDetailMatch = await userModel.findOne({
    $or: [{ username }, { email }],
  });

  if (!isUserDetailMatch) {
    return res.status(401).json({
      message: "Invalid name or email",
    });
  }

  const isPasswordMatch = await bcrypt.compare(
    password,
    isUserDetailMatch.password,
  );

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

/* privatePublicAccount
change account to private or public  
*/

async function privatePublicAccount(req, res) {
  const id = req.user.id;
  const isExit = await userModel.findById(id);
  if (!isExit) {
    return res.status(401).json({
      message: "unauthorized user",
    });
  }
  const { isPrivate } = req.body;

  if (typeof isPrivate !== "boolean") {
    return res.status(400).json({
      message: "type must be true of false",
    });
  }

  const updateUserProfile = await userModel.findByIdAndUpdate(id, {
    isPrivate: isPrivate,
  });

  return res.status(200).json({
    message: "user account update",
  });
}

// get-me api
// to get all  user data

async function getMe(req,res) {
  const data = req.user.id;
  const user = await userModel.findById(data);

  res.status(200).json({
    message: " user Data",
    user,
  });
}

module.exports = { register, login, privatePublicAccount, getMe };
