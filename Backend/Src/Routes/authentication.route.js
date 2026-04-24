const express = require("express")
const auth = express.Router();

const {login , register ,privatePublicAccount} = require("../Controllers/authentication.controllers")

// register api

auth.post("/register",register);

// Login api

auth.post("/login",login);


auth.patch("/privatePublic/" ,privatePublicAccount)

module.exports = auth;
