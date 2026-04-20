const express = require("express");
const app = express();
const port = 3000;
const auth = require("./Routes/autantication.route");
const cookieParse = require("cookieparser");
app.use(express.json());
app.use("/api",auth);
app.use(cookieParse)


module.exports={app,port}
