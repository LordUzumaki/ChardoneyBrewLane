import Order from '../models/Order.js';

// Fetch all orders for the current user
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user._id }); // Ensure `userId` is attached via middleware
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching orders' });
  }
};

// Create a new order
export const createOrder = async (req, res) => {
  try {
    const { items, totalAmount } = req.body;  // Assuming items and totalAmount are sent in request body
    const newOrder = new Order({
      userId: req.user._id,
      items,
      totalAmount,
      status: 'pending',  // Set initial status
    });
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(500).json({ message: 'Error creating order' });
  }
};

// Update order quantity for a specific item
export const updateOrderQuantity = async (req, res) => {
  const { orderId, newQuantity } = req.body;
  try {
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    order.quantity = newQuantity;
    await order.save();
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: 'Error updating order' });
  }
};

// Remove an order by ID
export const removeOrder = async (req, res) => {
  const { orderId } = req.params;
  try {
    const order = await Order.findByIdAndDelete(orderId);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json({ message: 'Order removed' });
  } catch (error) {
    res.status(500).json({ message: 'Error removing order' });
  }
};

// Get a single order by its ID
export const getOrderById = async (req, res) => {
  const { orderId } = req.params;
  try {
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching order details' });
  }
};

// Implement the checkout logic (e.g., process payment, finalize order)
export const checkout = async (req, res) => {
  // Example checkout logic (details depend on your business logic)
  try {
    const { orderId } = req.body; // Get the orderId from the request
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    // Set order status to 'completed' or perform payment logic here
    order.status = 'completed'; 
    await order.save();
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: 'Error processing checkout' });
  }
};

// Export all the controller functions
export default {
  createOrder,
  getAllOrders,
  updateOrderQuantity,
  removeOrder,
  getOrderById,
  checkout,
};

