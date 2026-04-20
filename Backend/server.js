require("dotenv").config()
const {app, port } = require("./Src/app")
const connectToDb = require("./Src/Database/database");
connectToDb()
app.listen(port,()=>{
    console.log("app is listing on port")
})
