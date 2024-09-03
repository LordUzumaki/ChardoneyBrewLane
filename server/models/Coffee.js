import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const coffeeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
    },
    imageUrl: {
        type: String,
    },
    category: {
        type: String,
        required: true,
    },
    available: {
        type: Boolean,
        default: true,
    },
});

const Coffee = model('Coffee', coffeeSchema);

export default Coffee;
