// src/pages/CheckoutPage.jsx
import React from 'react';
import OrderList from '../components/OrderList';

function CheckoutPage() {
  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <OrderList readOnly={true} />  {/* Ensure readOnly prop is passed */}
      <div className="checkout-summary">
        <h2>Order Summary</h2>
        {/* Add summary details like total price here */}
      </div>
      <button onClick={handlePayment}>Proceed to Payment</button>
    </div>
  );
}

const handlePayment = () => {
  // Handle payment processing here
  alert("Proceeding to payment...");
};

export default CheckoutPage;

