require("dotenv").config()
const app = require("./app.js")
const connectDB = require("./config/db.js")

connectDB()

const PORT = process.env.PORT

app.listen(PORT, ()=> console.log("Listening port at "+ PORT))
    .on('error', err => console.log('Server error:', err));