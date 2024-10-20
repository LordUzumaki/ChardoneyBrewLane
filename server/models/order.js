import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const orderSchema = new Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },  // Can be null for guest users
    items: [
      {
        coffeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Coffee' },
        name: String,
        price: Number,
        quantity: { type: Number, default: 1 },
      },
    ],
    totalPrice: { type: Number, required: true },
    status: { type: String, enum: ['cart', 'completed', 'cancelled'], default: 'cart' },
  });
  
const Order = model('Order', orderSchema);

export default Order;