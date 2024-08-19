const express = require('express');
const { createOrder, getOrderById } = require('../controllers/orderController.js');
const router = express.Router();

router.post('/Order', createOrder);
router.get('/Order/:id', getOrderById);

module.exports = router;