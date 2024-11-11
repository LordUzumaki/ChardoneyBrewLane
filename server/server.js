import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import upload from './middleware/uploadMiddleware.js';

dotenv.config(); // Load environment variables

import connectDB from './config/db.js';
import coffeeRoutes from './routes/coffeeRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import userRoutes from './routes/userRoutes.js';
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const uploadsPath = path.join(__dirname, 'uploads');
// if (!fs.existsSync(uploadsPath)) {
//     fs.mkdirSync(uploadsPath);
// }


const app = express();

app.use('/uploads', upload.single('image'), express.static('uploads'));




// Middleware
app.use(helmet());
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/coffee', coffeeRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/users', userRoutes);

app.get('/api/orders/cart', (req, res) => {
    // Replace this with your actual logic to fetch cart data
    const cartData = {
      items: [
        { id: 1, name: 'Product 1', quantity: 2 },
        { id: 2, name: 'Product 2', quantity: 1 },
      ],
      total: 59.99,
    };
    res.json(cartData);
  });
  




app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Connect to MongoDB
connectDB();

app.get('/', (req, res) => {
    res.send('Coffee Shop API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => console.log(`Server running on port ${PORT}`));
