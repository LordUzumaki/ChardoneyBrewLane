import User from '../models/User.js';
import jwt from 'jsonwebtoken';

export const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({ token });
};

export const signup = async (req, res) => {
    const { email, password, username } = req.body;
    const newUser = new User({ email, password, username });
    try {
        const savedUser = await newUser.save();
        if (!savedUser) {
            return res.status(400).json({ message: 'User already exists' });
        }
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
