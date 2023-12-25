const mongoose = require('mongoose');

const Schema = mongoose.Schema

const sellerSchema = new Schema({
    email: String,
    password: String,
    name: String,
});

const sellerModel = mongoose.model('seller', sellerSchema);

module.exports = sellerModel;