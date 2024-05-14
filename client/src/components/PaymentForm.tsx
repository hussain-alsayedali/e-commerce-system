import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PaymentForm = () => {
  // State variables to manage form inputs and navigation
  const [paymentMethod, setPaymentMethod] = useState("card"); // State for payment method selection
  const [cardNumber, setCardNumber] = useState(""); // State for card number input
  const [expiryDate, setExpiryDate] = useState(""); // State for card expiry date input
  const [cvv, setCvv] = useState(""); // State for CVV input
  const navigate = useNavigate(); // Hook for programmatic navigation

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log({ paymentMethod, cardNumber, expiryDate, cvv }); // Log form input values
    navigate("/paymentsuccess"); // Navigate to payment success page
  };

  // JSX rendering of the payment form
  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white p-8 rounded-lg shadow-lg"
    >
      {/* Payment details header */}
      <h2 className="text-2xl font-semibold text-purple-700">
        Payment Details
      </h2>
      {/* Payment method selection dropdown */}
      <div>
        <label className="block text-sm font-medium text-purple-900">
          Choose Payment Method
        </label>
        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-purple-500 focus:ring-purple-500"
        >
          <option value="card">Credit/Debit Card</option>
          <option value="apple">Apple Pay</option>
          <option value="cash">Cash</option>
        </select>
      </div>
      {/* Conditional rendering based on selected payment method */}
      {paymentMethod === "card" && (
        <>
          {/* Card number input */}
          <div>
            <label className="block text-sm font-medium text-purple-900">
              Card Number
            </label>
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-purple-500 focus:ring-purple-500"
              placeholder="1234 5678 9012 3456"
            />
          </div>
          {/* Expiry date and CVV inputs */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-purple-900">
                Expiry Date
              </label>
              <input
                type="text"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-purple-500 focus:ring-purple-500"
                placeholder="MM/YY"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-purple-900">
                CVV
              </label>
              <input
                type="text"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-purple-500 focus:ring-purple-500"
                placeholder="123"
              />
            </div>
          </div>
        </>
      )}
      {/* Additional information based on payment method */}
      {paymentMethod === "apple" && (
        <p className="text-sm text-gray-600">
          You will be redirected to Apple Pay to complete your purchase.
        </p>
      )}
      {paymentMethod === "cash" && (
        <p className="text-sm text-gray-600">
          Please ensure to have the exact change ready upon delivery.
        </p>
      )}
      {/* Button to confirm payment */}
      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
      >
        Confirm Payment
      </button>
    </form>
  );
};

export default PaymentForm;
