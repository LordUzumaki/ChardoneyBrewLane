// coffeeRoutes.js

import { Router } from 'express';

import { getAllCoffees, getCoffeeById, insertCoffee } from '../controllers/coffeeController.js';
import upload from '../middleware/upload.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = Router();

router.get('/', getAllCoffees);
router.post('/add', protect, admin, upload.single('image'), (req, res) => {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }
    insertCoffee(req, res);
});
router.get('/:id', getCoffeeById);

export default router;
