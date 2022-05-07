const express = require("express");
// const { connect } = require("./controllers/user.controller");
const connect = require("./configs/db")
const userController = require("./controllers/user.controller")
let PORT = 8000;

let app = express();
app.use(express.json())
app.use("/users", userController)
//
app.listen(PORT, async () => {
    try {
        await connect();
        console.log("Running on Port: 8000");
    } catch (e) {
        console.log(e);
    }

})