
const express = require('express');
const { getCoffee, getCoffeeById } = require('../controllers/coffeeController.js');
const router = express.Router();

router.get('/Coffee', getCoffee);
router.get('/Coffee/:id', getCoffeeById);

module.exports = router;