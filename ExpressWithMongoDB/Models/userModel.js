
const mongoose = require('mongoose')

const schema = mongoose.Schema

const userSchema = new schema({
    username: String,
    email: String,
    password: String,
    role: String,
    mobile: Number
})

const User = mongoose.model("user", userSchema)

module.exports = User