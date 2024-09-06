// coffeeRoutes.js

import { Router } from 'express';

import { getAllCoffees, getCoffeeById, addCoffee, deleteCoffee, updateCoffee} from '../controllers/coffeeController.js';
import upload from '../middleware/uploadMiddleware.js';
import { protect, admin } from '../middleware/authMiddleware.js';


const router = Router();

router.get('/', getAllCoffees);
router.post('/add', protect, admin, upload.single('image'), addCoffee);
router.get('/:id', getCoffeeById);

router.delete('/:_id', protect, admin, deleteCoffee);
router.put('/:_id', protect, admin, upload.single('image'), updateCoffee);

export default router;
