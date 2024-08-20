const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const errorHandler = require('./middleware/errorHandler');

// Initialize express
const app = express();
app.use(cors());
app.use(express.json());

require('dotenv').config(); // Load environment variables from a .env file into process.env

const connectDB = require('./config/db'); // Load the database configuration
let coffeeRoutes, orderRoutes, userRoutes;

// Load routes with error handling
try {
    coffeeRoutes = require('./routes/coffeeRoutes');
    console.log('CoffeeRoutes module loaded successfully');
} catch (error) {
    console.error('Error loading CoffeeRoutes module:', error);
    process.exit(1); // Exit the process if a critical module cannot be loaded
}

try {
    orderRoutes = require('./routes/orderRoutes');
    console.log('Order module loaded successfully');
} catch (error) {
    console.error('Error loading Order module:', error);
    process.exit(1); // Exit the process if a critical module cannot be loaded
}

try {
    userRoutes = require('./routes/userRoutes');
    console.log('UserRoutes module loaded successfully');
} catch (error) {
    console.error('Error loading UserRoutes module:', error);
    process.exit(1); // Exit the process if a critical module cannot be loaded
}
// Middleware
app.use(helmet());
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/coffees', coffeeRoutes); // Routes related to coffee
app.use('/orders', orderRoutes);   // Routes related to orders
app.use('/users', userRoutes);     // Routes related to users

app.use(errorHandler); // Error handling middleware
// Connect to MongoDB
connectDB();
// Root route
app.get('/', (req, res) => {
    res.send('Coffee Shop API is running...');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => console.log(`Server running on port ${PORT}`));
