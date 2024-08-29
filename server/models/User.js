import mongoose from 'mongoose';

const { Schema, model } = mongoose; // Destructure Schema and model from mongoose

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const User = model('User', userSchema); // Use model function to create the User model

export default User; // Export the User model as the default export
