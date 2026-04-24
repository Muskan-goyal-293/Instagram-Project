// require package
const express = require("express");
const app = express();
const port = 3000;
const auth = require("./Routes/authentication.route");
const postRout = require("./Routes/post.routes");
const followRoute = require("./Routes/follower.route");
const cookieParser = require("cookie-parser");

// middleware
app.use(express.json());
app.use(cookieParser());

// routes api middleware
app.use("/api",auth);
app.use("/api", postRout);
app.use("/api" , followRoute);

// export app and port
module.exports={app,port}
