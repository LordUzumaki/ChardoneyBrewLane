
const express = require('express');
const { getCoffee, getCoffeeById } = require('../controllers/coffeeController.js');
const router = express.Router();

router.get('/coffee', getCoffee);
router.get('/coffee/:id', getCoffeeById);

module.exports = router;