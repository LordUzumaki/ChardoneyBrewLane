import express, { json } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import coffeeRoutes from './routes/coffeeRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import userRoutes from './routes/userRoutes.js';
import errorHandler from './middleware/errorHandler.js';
import dotenv from 'dotenv';
dotenv.config(); // Load environment variables

import connectDB from './config/db.js'; // Load the database configuration


// Initialize Express
const app = express();



// Middleware
app.use(helmet());
app.use(morgan('dev'));
app.use(cors());
app.use(json());
app.use(cookieParser());

// Routes
app.use('/api/coffee', coffeeRoutes); // Routes related to coffee
app.use('/api/orders', orderRoutes);   // Routes related to orders
app.use('/api/users', userRoutes);     // Routes related to users

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
