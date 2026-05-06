const express = require("express");
const followRoute = express.Router();
const {followFunction , unfollowFunction, allUser} = require("../Controllers/follow.controller")

followRoute.post("/follow/:id", followFunction );
followRoute.delete("/delete/:id" , unfollowFunction)
followRoute.get("/allUser" , allUser)

module.exports = followRoute;