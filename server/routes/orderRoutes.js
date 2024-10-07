import { Router } from 'express';
import { createOrder, getAllOrders, getOrderById, addItemToCart, getCart } from '../controllers/orderController.js';
const router = Router();

router.post('/', createOrder);
router.get('/', getAllOrders);
router.get('/:id', getOrderById);

// Remove `authMiddleware` here, as it's not needed
router.post('/cart', addItemToCart);
router.get('/cart', getCart);

export default router;
