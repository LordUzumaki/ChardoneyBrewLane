// coffeeRoutes.js

import { Router } from 'express';
import { getAllCoffees, getCoffeeById } from '../controllers/coffeeController.js';

const router = Router();

router.get('/', getAllCoffees);
router.get('/:id', getCoffeeById);

export default router;
