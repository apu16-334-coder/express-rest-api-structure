const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        trim: true
    }
})

const Users = mongoose.model("User", userSchema);

module.exports = Users;