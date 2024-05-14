import React from "react";

export default function Content() {
  return (
    <div className="bg-gray-100 py-4 px-9 rounded-md mb-40">
      {[1, 2].map((item) => (
        <div key={item} className="flex space-x-8 mt-8">
          <img
            className="h-40 rounded-md"
            src="src/assets/phone.png"
            alt="Mobile Phone"
          />
          <div>
            <p className="text-lg font-semibold">Mobile Phone</p>
            <div className="flex ml-5 mb-2.5">
              <p className="text-gray-500 mr-2 font-semibold">2000SR</p>
            </div>
            <div className="border border-gray-500 rounded-md py-2 px-3 flex justify-between items-center">
              <button className="h-8 w-8 bg-purple-800 text-center rounded-md flex items-center justify-center text-white">
                -
              </button>
              <p>1</p>
              <button className="h-8 w-8 bg-purple-800 text-center rounded-md flex items-center justify-center text-white">
                +
              </button>
            </div>
          </div>
        </div>
      ))}

      <div className="flex justify-between mt-8">
        <p className="font-semibold">Shipping fee</p>
        <p className="font-semibold">20SR</p>
      </div>

      <hr className="border-gray-300 my-2" />

      <div className="flex justify-between mt-4">
        <p className="font-semibold">Total</p>
        <p className="font-semibold">4080SR</p>
      </div>

      <hr className="border-gray-300 my-2" />

      <button className="bg-purple-800 text-white py-2 px-20 text-lg rounded-lg mt-4">
        Checkout
      </button>
    </div>
  );
}
