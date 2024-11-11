import Coffee from '../models/Coffee.js'; // Import the Coffee model
import Order from '../models/order.js'; // Import the Order model

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
  const userId = req.user ? req.user._id : null;
  
  ///const numericPrice = parseFloat(price);  // Convert to number if necessary


  try {
    console.log(`Adding item to cart - Coffee ID: ${coffeeId}, Name: ${name}, Price: ${price}, User ID: ${userId}`);

    const numericPrice = parseFloat(price); // Ensure price is a number
    if (isNaN(numericPrice)) {
      return res.status(400).json({ message: 'Invalid price format' });
    }
    
    let order = await Order.findOne({ userId, status: 'cart' });

    if (!order) {
      order = new Order({
        userId,
        items: [{ coffeeId, name, price, quantity: 1 }],
        totalPrice: price,
        status: 'cart',
      });
    } else {
      const existingItem = order.items.find((item) => item.coffeeId.equals(coffeeId));

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        order.items.push({ coffeeId, name, price, quantity: 1 });
      }

      // Calculate totalPrice correctly
      order.items.forEach(item => {
        console.log(`Calculating: ${item.name} - Price: ${item.price}, Quantity: ${item.quantity}`);
      });
      order.totalPrice = order.items.reduce((total, item) => {
        const itemTotal = item.price * item.quantity;
        console.log(`Item Total for ${item.name}: ${itemTotal}`);
        return total + itemTotal;
      }, 0);
      
      console.log("Calculated Order Total Price:", order.totalPrice);

    }

    await order.save();
    res.json(order);
  } catch (error) {
    console.error("Error in addItemToCart:", error);
    res.status(500).json({ message: "Error adding item to cart" });
  }
};








export const getCart = async (req, res) => {
  const userId = req.user ? req.user._id : GUEST_USER_ID; // Use guest user if not logged in

  try {
    const order = await Order.findOne({ userId, status: 'cart' }).populate(
      'items.coffeeId'
    );

    if (!order) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    res.json(order);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error fetching cart', error: error.message });
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
  
};