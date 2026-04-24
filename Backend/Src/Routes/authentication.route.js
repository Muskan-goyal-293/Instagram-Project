const express = require("express")
const auth = express.Router();

const {login , register} = require("../Controllers/authentication.controllers")

// register api

auth.post("/register",register);

// Login api

auth.post("/login",login);

module.exports = auth;
