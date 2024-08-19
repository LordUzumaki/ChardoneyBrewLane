const User = require('../models/User');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if(!user || user.password !== password){
        return res.status(401).json({message: 'Invalid email or password'});
    }
    const token = jwt.sign({ id: user._id }, process.env.jwtSecret);
    res,json({token});

}

const signup = async (req, res) => {
    const { email, password, username } = req.body;
    const newUser = new User({ email, password, username });
    try{
        const saveUser = await newUser.save();
        if(!saveUser){
            return res.status(400).json({ message: 'User already exists'});
        }
        res.status(201).json(saveUser);
    }catch (error){
        res.status(500).json({error: error.message});
    }
};

module.exports ={
    login,
    signup,
};