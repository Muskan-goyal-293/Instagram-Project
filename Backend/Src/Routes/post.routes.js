const express = require("express");
const postRout = express.Router();
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const postApi = require("../Controllers/post.controllers")
postRout.post("/post", upload.single("image"), postApi );

module.exports = postRout;