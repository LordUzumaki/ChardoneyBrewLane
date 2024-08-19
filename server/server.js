
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const coffeeRoutes = require('./server/routes/CoffeeRoutes');
const orderRoutes = require('./server/routes/OrderRoutes');
const userRoutes = require('./server/routes/userRoutes');
require('dotenv').config(); // Load environment variables from a .env file into process.env


//initialize express
const app = express();
app.use(cors());
app.use(express.json());

//Routes
app.use('/api/coffees', coffeeRoutes); // Routes related to coffee
app.use('/api/orders', orderRoutes);   // Routes related to orders
app.use('/api/users', userRoutes);     // Routes related to users
//Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));


app.get('/', (req, res) => {
    res.send('Coffee Shop API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => console.log(`Server running on port ${PORT}`));


