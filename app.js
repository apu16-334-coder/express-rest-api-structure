const express = require("express")
const app = express()
const userRouter = require("./routes/user.routes")
const globalErrorHandler = require("./middlewares/error.middleware")

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

app.use(globalErrorHandler);

module.exports = app
