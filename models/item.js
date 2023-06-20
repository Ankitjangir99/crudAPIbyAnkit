const mongoose = require('mongoose');


//creating the product schema

const itemSchema = new mongoose.Schema({
    name: String,
    brand: String
}, {
    versionKey: false
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;

