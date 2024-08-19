const mongoose = require('mongoose');

/**
 * @typedef {Object} CoffeeSchema
 * @property {string} name - The name of the coffee.
 * @property {number} price - The price of the coffee.
 * @property {string} description - The description of the coffee.
 * @property {string} imageUrl - The URL of the coffee's image.
 */
const coffeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    description:{
        type: String,
        required: true,
    },
    imageUrl:{
        type: String,
        required: true
    },
});

const Coffee = mongoose.model('Coffee', coffeeSchema);
module.exports = Coffee;