const express = require("express");
const app = express();
const userRouter = require("./routes/user.routes.js")

app.use(express.json())




app.get("/", (req, res) => res.send("API is running..."));

app.use("/users", userRouter)

app.use((err, req, res, next) => {
    console.error(err.stack); // for debugging
    res.status(err.status || 500).json({
        success: false,
        message: err.message || "Internal Server Error"
    });
});


module.exports = app