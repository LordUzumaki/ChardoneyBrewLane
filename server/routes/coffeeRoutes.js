// coffeeRoutes.js

import { Router } from 'express';
import { getAllCoffees, getCoffeeById, insertCoffee } from '../controllers/coffeeController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = Router();

router.get('/', getAllCoffees);
router.post('/add', protect, admin, insertCoffee);
router.get('/:id', getCoffeeById);

export default router;
