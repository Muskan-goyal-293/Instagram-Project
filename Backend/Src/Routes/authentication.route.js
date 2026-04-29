const express = require("express")
const auth = express.Router();
const multer = require("multer");
const upload = multer({storage : multer.memoryStorage()});
const {login , register ,privatePublicAccount , getMe} = require("../Controllers/authentication.controllers")

// register api
auth.post("/register",upload.single("image"),register);

// Login api
auth.post("/login",login);

// private public account api
auth.patch("/privatePublic/" ,privatePublicAccount)

// data catch api
auth.get("/get-me", getMe)


module.exports = auth;
