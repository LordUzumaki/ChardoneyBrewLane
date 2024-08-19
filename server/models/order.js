const mongoose = require('mongoose');
/**
 * Represents the schema for an order.
 * @typedef {Object} OrderSchema
 * @property {mongoose.Types.ObjectId} userId - The ID of the user who placed the order.
 * @property {Array} items - An array of items in the order.
 * @property {mongoose.Types.ObjectId} items.coffeeId - The ID of the coffee item.
 * @property {Number} items.quantity - The quantity of the coffee item.
 * @property {String} status - The status of the order. Can be 'pending' or 'completed'.
 * @property {Date} timestamps - The timestamps for when the order was created and updated.
 */
const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    items: [{
        coffeeId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Coffee',
            required: true
        },
        quantity: {
            type: Number,
            required: true
        }
    }],
    status: {
        type: String,
        enum: ['pending', 'completed'],
        default: 'pending'
    }
}, { timestamps: true });

const orderModel = mongoose.model('Order', orderSchema);
module.exports = orderModel;