import { Router } from 'express';
import { createOrder, getOrderById } from '../controllers/orderController.js';
const router = Router();

router.post('/Order', createOrder);
router.get('/Order/:id', getOrderById);

export default router;