const mongoose = require('mongoose');

const Schema = mongoose.Schema

const countrySchema = new Schema({
    name: String,
    code: String
});

const CountryModel = mongoose.model('country', countrySchema);
module.exports = CountryModel;
