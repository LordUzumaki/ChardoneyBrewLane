    // coffeeController.js

    // Import necessary modules/models
    import Coffee from '../models/Coffee.js';  // Assuming Coffee is the model you're working with


    export const addCoffee = async (req, res) => {
        try {
            const { name, price, description, category, available } = req.body;
            const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;
    
            console.log('Received Data:', { name, price, description, category, available, imageUrl });
    
            if (!name || !price || !description || !category || available === undefined || !imageUrl) {
                return res.status(400).json({ message: 'All fields are required' });
            }
    
            const newCoffee = new Coffee({
                name,
                price: parseFloat(price), // Ensure price is a number
                description,
                imageUrl,
                category,
                available: available === 'true', // Convert available to boolean
            });
    
            const savedCoffee = await newCoffee.save();
            console.log('Saved Coffee:', savedCoffee); // Debug log for saved item
    
            res.status(201).json(savedCoffee); // Ensure response is sent here
        } catch (error) {
            console.error('Error in addCoffee:', error);
            res.status(500).json({ message: error.message });
        }
    };
    
    

    // Controller function to get all coffees
    export const getAllCoffees = async (req, res) => {
        try {
            const coffees = await Coffee.find();
            res.json(coffees);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };

    export const deleteCoffee = async (req, res) =>{
        try{
            const coffees = await Coffee.findByIdAndDelete(req.params._id);
            res.json(coffees);
        }
        catch(error){
            res.status(500).json({message: error.message});
        }
    };

    export const updateCoffee = async (req, res) => {
        try {
            const { id } = req.params; // Make sure you're extracting the ID correctly
            const updatedData = req.body;

            const updatedCoffee = await Coffee.findByIdAndUpdate(id, updatedData, { new: true });

            if (!updatedCoffee) {
                return res.status(404).json({ message: 'Coffee not found' });
            }

            return res.json(updatedCoffee); // Return the updated coffee details
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
        addCoffee,
        deleteCoffee,
        getAllCoffees,
        getCoffeeById,
    };
