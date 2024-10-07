import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [
      {
        name: String,
        price: Number,
        quantity: Number,
      },
    ],
    status: { type: String, enum: ['cart', 'completed', 'cancelled'], default: 'cart' },
    totalPrice: { type: Number, required: true },
  });
const Order = mongoose.model('Order', orderSchema);

export default Order;
