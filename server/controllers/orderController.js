import Order from '../models/Order.js';

export const getAllOrders = async (req, res) => {
    try{
        const orders = await Order.find();
        res.json(orders);
    }
    catch(error){
        res.status(500).json({ message: error.message });
    }
};

export const createOrder = async (req, res) => {
    const { userId, items, totalAmount } = req.body;
    const order = new Order({ userId, items, totalAmount });

    try {
        const savedOrder = await order.save();
        res.status(201).json(savedOrder);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



export const getOrderById = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id).populate('items');
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.json(order);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


export default {
    createOrder,
    getAllOrders,
    getOrderById,
};
