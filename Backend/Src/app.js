// require package
const express = require("express");
const app = express();
const port = 3000;
const auth = require("./Routes/authentication.route");
const postRout = require("./Routes/post.routes");
const followRoute = require("./Routes/follower.route");
const cookieParser = require("cookie-parser");
const cors = require("cors")
// middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({credentials : true ,origin :"http://localhost:5173"}))
// routes api middleware
app.use("/api",auth);
app.use("/api", postRout);
app.use("/api" , followRoute);

// export app and port
module.exports={app,port}
