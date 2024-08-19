const order = require('../models/Order');

const createOrder = async (req, res) => {
    const {
        userId,
        items,
        totalAmount,
    } = req.body;
    const createOrder = new Order({userId, items, totalAmount});

    try {
        const savedOrder = await createOrder.save();
        res.status(201).json(savedOrder);
    }catch (error){
        res.status(500).json({error: error.message});
    }
};
const getOrderById = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id).populate('items');
        if(!order){ return res.status(404).json({message: 'Order not found'});
    }
    res.json(order);

    }catch (error){
        res.status(500).json({error: error.message});
    }

};

module.exports = {
    createOrder,
    getOrderById,
};