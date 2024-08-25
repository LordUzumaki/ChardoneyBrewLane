import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';  // Import bcrypt for hashing passwords

// Login function
export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find the user by email
        const user = await User.findOne({ email });

        // If the user doesn't exist or the password is incorrect, return an error
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Generate a JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Return the token to the client
        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Signup function
export const signup = async (req, res) => {
    const { email, password, username } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password before saving the user
        const hashedPassword = await bcrypt.hash(password, 12);

        // Create a new user with the hashed password
        const newUser = new User({ email, password: hashedPassword, username });

        // Save the user to the database
        const savedUser = await newUser.save();

        // Generate a token for the new user
        const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Return the user data and token to the client
        res.status(201).json({ user: savedUser, token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

