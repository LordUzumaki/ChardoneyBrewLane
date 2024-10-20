import { Router } from 'express';
import { createOrder, getAllOrders, getOrderById, addItemToCart, getCart } from '../controllers/orderController.js';
const router = Router();

router.post('/', createOrder);
router.get('/', getAllOrders);
router.get('/:id', getOrderById);
router.get('/cart', getCart); // Retrieve cart items
router.post('/cart', addItemToCart); // Add item to cart


// Remove `authMiddleware` here, as it's not needed
router.post('/cart', addItemToCart);
router.get('/cart', getCart);

export default router;
