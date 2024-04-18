import React from 'react';
import Input from '../components/Input';
import Content from '../components/Content';

const CheckoutPage = () => {
  return (
    <div className="py-10 px-4 md:px-20">
      <h1 className="text-2xl md:text-4xl font-semibold text-purple-900">Checkout</h1>
      <div className="flex flex-col md:flex-row justify-between items-start mt-6">
        <div className="w-full md:w-1/2 p-4">
          <Input />
        </div>
        <div className="w-full md:w-1/2 p-4">
          <Content />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
