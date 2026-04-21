const express = require("express");
const app = express();
const port = 3000;
const auth = require("./Routes/autantication.route");
const postRout = require("./Routes/post.routes");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());

app.use("/api",auth);

app.use("/api", postRout);



module.exports={app,port}
