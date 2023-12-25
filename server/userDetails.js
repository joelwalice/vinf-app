const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userSchema = new Schema({
    email: String,
    password: String,
    name: String,
});

const UserModel = mongoose.model('user', userSchema);

module.exports = UserModel;