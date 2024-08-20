const express = require('express');
const { getCoffee, getCoffeeById, getAllCoffees } = require('../controllers/coffeeController.js');
const router = express.Router();

router.get('/', getAllCoffees);
router.get('/coffee', getCoffee);
router.get('/:id', getCoffeeById);

module.exports = router;
