// coffeeController.js

// Import necessary modules/models
import Coffee from '../models/Coffee.js';  // Assuming Coffee is the model you're working with


export const addCoffee = async (req, res) => {
    try {
        const { name, price, description, category, available } = req.body;
        
        // Ensure the file has been uploaded
        const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;


        if (!name || !price || !description || !category || available === undefined || !imageUrl) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const newCoffee = new Coffee({
            name,
            price,
            description,
            imageUrl,
            category,
            available,
        });

        const savedCoffee = await newCoffee.save();
        res.status(201).json(savedCoffee);
    } catch (error) {
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
    

    try{
        const { name, price, description, category, available } = req.body;
        const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;
        const updatedCoffee = await Coffee.findByIdAndUpdate(req.params._id,
            {
                name,
                price,
                description,
                imageUrl,
                category,
                available,
            },
            {new: true, runValidators: true}
        );
        if(!updatedCoffee){
            return res.status(404).json({message: 'Coffee not found'});
        }
        res.json(200).json(updatedCoffee);
    }catch(error){
        res.status(500).json({message: error.message});
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
    getAllCoffees,
    getCoffeeById,
};
