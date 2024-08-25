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
});

const Coffee = model('Coffee', coffeeSchema);

export default Coffee;
