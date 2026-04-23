const express = require("express");
const postRout = express.Router();

const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

const { postApi, Postfatch } = require("../Controllers/post.controllers");

const postMiddleware = require("../Middleware/post.middleware");

const postModel = require("../Model/post.model");


// /api/post  => create post
postRout.post("/post", upload.single("image"), postMiddleware, postApi);

// /api/postFetch => fetch post
postRout.get("/postFetch", postMiddleware, Postfatch);

module.exports = postRout;
