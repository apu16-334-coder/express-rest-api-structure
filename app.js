const express = require("express")
const app = express()
const userRouter = require("./routes/user.routes")

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Api is running......")
})

app.use("/users", userRouter)

app.use((req, res, next) => {
    const error = new Error("Route not found");
    error.status = 404;
    next(error);
})

app.use((err, req, res, next) => {
    console.error(err.stack);

    
    // A. Duplicate Key (e.g., unique email, password)
    if (err.code === 11000) {
        err.status = 400;
    }

    if (err.name === "ValidationError" || err.name === "CastError") {
        err.status = 400;
    }

    res.status(err.status || 500).json({
        success: false,
        message: err.message || "Internal Server Error"
    });
});

module.exports = app
