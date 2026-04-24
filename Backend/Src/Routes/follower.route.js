const express = require("express");
const followRoute = express.Router();
const {followfunction , unfollowfunction} = require("../Controllers/follow.controller")

followRoute.post("/follow/:id", followfunction );
followRoute.delete("/delete/:id" , unfollowfunction)


module.exports = followRoute;