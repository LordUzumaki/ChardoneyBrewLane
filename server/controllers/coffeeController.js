const Coffee = require('../models/Coffee'); // Import the Coffee model

// Function to get all coffee records from the database
const getAllCoffees = async (req, res) => {
    try {
        const coffee = await Coffee.find();
        res.json(coffee);
    } catch (error) {
        console.error('Error fetching coffees:', error); // Check if this logs any errors
        res.status(500).json({ message: error.message });
    }
};

// const getCoffee = async (req, res) => {
//     try {
//         const coffee = await Coffee.find();
//         res.json(coffee);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

const getCoffeeById = async (req, res) => {
    try {
        const coffee = await Coffee.findById(req.params.id);
        if (!coffee) {
            return res.status(404).json({ message: 'Coffee not found' });
        }
        res.json(coffee);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllCoffees,
    // getCoffee,
    getCoffeeById,
};
