import mongoose from 'mongoose';
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
    const { items, totalPrice } = req.body;  // Assuming items and totalAmount are sent in request body
    const newOrder = new Order({
      userId: req.user._id,
      items,
      totalPrice,
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

export const addItemToCart = async (req, res) => {
  const { coffeeId, name, price } = req.body;

  // Ensure required data is provided
  if (!coffeeId || !name || !price) {
    return res.status(400).json({ message: 'Invalid item data' });
  }

  try {
    // Use session ID for unauthenticated users (or generate a guest ID)
    const sessionId = req.sessionID || 'guest';  // Fallback to guest if no session ID
    
    let order = await Order.findOne({ sessionId });

    // If no cart exists for the session, create a new one
    if (!order) {
      order = new Order({
        sessionId,
        items: [{ coffeeId, name, price, quantity: 1 }],
        totalAmount: price,
        status: 'cart',  // Status of the cart
      });
    } else {
      // Check if the item is already in the cart
      const existingItem = order.items.find(item => item.coffeeId === coffeeId);

      if (existingItem) {
        existingItem.quantity += 1;  // Increase quantity if item exists
      } else {
        order.items.push({ coffeeId, name, price, quantity: 1 });  // Add new item if not in cart
      }

      // Recalculate total amount
      order.totalAmount = order.items.reduce((total, item) => total + item.price * item.quantity, 0);
    }

    // Save the updated order (cart)
    await order.save();
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: 'Error adding item to cart', error: error.message });
  }
};




//Get cart details
export const getCart = async (req, res) => {
  const sessionId = req.sessionID || 'guest';  // Use session ID for non-auth users
  
  try {
    // Look for a cart associated with the session ID
    const order = await Order.findOne({ sessionId, status: 'cart' }).populate('items.coffeeId');

    if (!order) {
      return res.status(404).json({ message: 'Cart is empty' });  // No cart found
    }

    res.json(order);  // Return cart details
  } catch (error) {
    res.status(500).json({ message: 'Error fetching cart', error: error.message });
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

const GUEST_USER_ID = 'guest_user_id'; // ID of your predefined guest user
export const addItemToCart = async (req, res) => {
  const { coffeeId, name, price } = req.body;
  const userId = req.user ? req.user._id : GUEST_USER_ID;

  try {
    let order = await Order.findOne({ userId, status: 'cart' });

    if (!order) {
      order = new Order({
        userId,
        items: [{ coffeeId, name, price, quantity: 1 }],
        totalPrice: price,
        status: 'cart',
      });
    } else {
      const existingItem = order.items.find(item => item.coffeeId.equals(coffeeId));

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        order.items.push({ coffeeId, name, price, quantity: 1 });
      }

      order.totalPrice = order.items.reduce((total, item) => total + item.price * item.quantity, 0);
    }

    await order.save();
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: 'Error adding item to cart' });
  }
};





export const getCart = async (req, res) => {
  const userId = req.user ? req.user._id : GUEST_USER_ID;  // Use guest user if not logged in

  try {
    const order = await Order.findOne({ userId, status: 'cart' }).populate('items.coffeeId');

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.json(order);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching cart', error: error.message });
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
  addItemToCart,
  getCart,
  addItemToCart,
  getCart,
};