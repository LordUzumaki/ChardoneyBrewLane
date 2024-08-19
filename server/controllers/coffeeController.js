// Import the Coffee model from the coffeeModel file
const Coffee = require('../models/coffeeModel');

// Function to get all coffee records from the database
const getCoffee = async (req, res) => {
    try {
        // Fetch all coffee records from the database
        const coffee = await Coffee.find();
        // Send the fetched coffee records as a JSON response
        res.json(coffee);
    } catch (error) {
        // If an error occurs, send a 500 status code and the error message as a JSON response
        res.status(500).json({ message: error.message });
    }
};

const getCoffeeById = async (req, res) => {
    try {
        // Fetch a coffee record by its ID from the database
        const coffee = await Coffee.findById(req.params.id);
        // If the coffee record is not found, send a 404 status code and a 'Coffee not found' message
        if (!coffee) res.status(404).json({ message: 'Coffee not found' });
        // Send the fetched coffee record as a JSON response
        res.json(coffee);
    } catch (error) {
        // If an error occurs, send a 500 status code and the error message as a JSON response
        res.status(500).json({ message: error.message });
    }
};

// Export the getCoffee and getCoffeeById functions for use in other parts of the application
module.exports = {
    getCoffee,
    getCoffeeById
};