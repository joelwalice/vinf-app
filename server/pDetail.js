const mongoose = require('mongoose');

const Schema = mongoose.Schema

const productSchema = new Schema({
    email: String,
    name: String,
    price: Number,
    description: String,
    category: String,
    image: String,
    seller: String,
    color: String,
});

const ProductModel = mongoose.model('product', productSchema);

module.exports = ProductModel;
