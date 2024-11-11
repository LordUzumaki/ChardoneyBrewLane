import React, { useState } from 'react';

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    paymentMethod: 'credit-card'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the checkout process here
    console.log('Checking out with:', formData);
    // Make an API call to submit the order/payment
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Full Name"
          required
        />
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Shipping Address"
          required
        />
        <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange}>
          <option value="credit-card">Credit Card</option>
          <option value="paypal">PayPal</option>
          <option value="apple-pay">Apple Pay</option>
        </select>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default CheckoutPage;
