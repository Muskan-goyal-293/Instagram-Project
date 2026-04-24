const express = require("express")
const auth = express.Router();
const multer = require("multer");
const upload = multer({storage : multer.memoryStorage()});
const {login , register ,privatePublicAccount} = require("../Controllers/authentication.controllers")

// register api

auth.post("/register",upload.single("image"),register);

// Login api

auth.post("/login",login);


auth.patch("/privatePublic/" ,privatePublicAccount)

module.exports = auth;
