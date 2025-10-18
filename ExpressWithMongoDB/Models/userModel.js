

const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2');



const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    role: String,
    mobile: Number,
    Score: Number,
    batch: String,
    gender: String

})
userSchema.plugin(mongoosePaginate);
const User = mongoose.model("user", userSchema)

module.exports = User