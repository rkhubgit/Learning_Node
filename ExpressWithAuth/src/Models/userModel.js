

const mongoose = require('mongoose');

const Schema = mongoose.Schema

const UserSchema = new Schema({
    firstName:{
        type: String,
        require: true,

    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    batch: {
        type: String,
        require: true,
        enum:["Linux", "Ubuntu", "macos"]
    },
    Role: {
        type: String,
        required: true,
        enum: ["user", "admin"]
    }
})

const User = mongoose.model("user", UserSchema);

module.exports = User