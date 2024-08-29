// coffeeController.js

// Import necessary modules/models
import Coffee from '../models/Coffee.js';  // Assuming Coffee is the model you're working with

// Controller function to get all coffees
export const getAllCoffees = async (req, res) => {
    try {
        const coffees = await Coffee.find();
        res.json(coffees);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller function to get a coffee by ID
export const getCoffeeById = async (req, res) => {
    try {
        const coffee = await Coffee.findById(req.params.id);
        if (!coffee) return res.status(404).json({ message: 'Coffee not found' });
        res.json(coffee);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export default {
    getAllCoffees,
    getCoffeeById,
};
