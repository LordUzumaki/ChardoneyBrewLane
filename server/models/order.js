import mongoose from 'mongoose';

const { Schema, model } = mongoose; // Destructure the necessary functions

const orderSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    items: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Coffee',
        },
    ],
    totalAmount: {
        type: Number,
        required: true,
    },
});

const Order = model('Order', orderSchema); // Use the 'model' function to create the model

export default Order; // Export the Order model as default
