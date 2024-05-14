import Button from "../components/Button";
import { FaHeart, FaTrash } from "react-icons/fa";
import { useState } from 'react';
import Sidebar from '../components/Sidebar.tsx';
import Dashboard from '../components/Dashboard.tsx';
export default function ProductViewPage() {
  const [sidebarToggle, setSidebarToggle] = useState(true);
  return (
    <>
    <Sidebar sidebarToggle={sidebarToggle} role="user"/>
    <Dashboard sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle}/>
    <div className="flex flex-col items-center justify-center align-middle mt-8">
      <div className="flex flex-col w-11/12">
        <div className="flex justify-between ">
          <h1 className="font-semibold text-lg">Product Name</h1>
          <div>
            <button className="mr-8">
              <FaHeart size={35} />
            </button>
            <button>
              <FaTrash size={35} />
            </button>
          </div>
        </div>
        <img
          className="aspect-[16/9] h-48 object-contain"
          src="./src/assets/emptycart.png"
          alt=""
        />

        <div className="flex gap-x-4 mt-8 justify-center">
          <button className=" p-2 bg-purple-300 w-12 rounded">-</button>
          <span className="border p-2  w-12 rounded text-center">1</span>
          <button className=" p-2 bg-purple-300 w-12 rounded">+</button>
        </div>
        <div className="flex  flex-col justify-center items-center mt-8">
          <h2>cost : 50 SR</h2>
          <p>description</p>
        </div>

        <div className="mt-8 w-full">
          <Button title="Add to cart" />
        </div>
        <div className="mt-8 w-full">
          <Button title="Buy now" />
        </div>
      </div>
    </div>
    </>
  );
}
