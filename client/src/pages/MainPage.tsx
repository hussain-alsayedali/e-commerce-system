import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaHeart } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";
import Sidebar from "../components/Sidebar";
import ProductCard from "../components/ProductCard";
// import ChatBotPage from "./ChatBotPage";

const MainPage = () => {
  // You would manage your state and context here
  const [visibleChatBot, setVisibleChatBot] = useState(false);

  const toggleChatBot = () => {
    setVisibleChatBot(!visibleChatBot);
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
    const products = [
        { id: 1, name: "Product One", image: "./src/assets/product1.png", description: "Description for Product One", price: 50, keywords: "eco, green" },
        { id: 2, name: "Product Two", image: "./src/assets/product2.png", description: "Description for Product Two", price: 75, keywords: "tech, modern" },
        { id: 3, name: "Product Three", image: "./src/assets/product3.png", description: "Description for Product Three", price: 100, keywords: "health, fitness" }
    ];

  return (
    <div>
      <div className="w-full flex p-4">
        <div className="mr-2">
          <input
            type="text"
            placeholder="Search Text"
            className="w-full px-4 py-2 pr-40 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-nuetralpurple bg-semiwhite text-black"
          />
          <div className="absolute top-0 right-0 px-3 py-2">
            <img
              src="./src/assets/search.png"
              alt="seach bar icon"
              className="h-6 w-6 pt-1 text-gray-400"
            />
          </div>
        </div>
        <button
          className="flex items-center bg-semiwhite text-black pr-6 pl-3 py-2 rounded-md"
          onClick={toggleChatBot}
        >
          <span className="pr-2">Chatbot</span>
          <img
            src="./src/assets/chatbot.png"
            alt="Button Icon"
            className="w-6 h-6"
          />
        </button>
      </div>
      <div className="bg-darkpurple w-full flex justify-between p-4">
        <div></div>
        <div className="bg-nuetralpurple w-[280px] p-2 px-20 ml-15 rounded-md text-white text-center">
          Popular
        </div>
        <button className=" bg-nuetralpurple w-[60px] text-center text-white px-4 py-2 ml-14 rounded-md">
          Filter
        </button>
      </div>
      <div className="pl-20">
        <Carousel responsive={responsive} className="py-10">
            <Carousel responsive={responsive}>
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </Carousel>
        </Carousel>

      </div>
      <div className="bg-lightpurple w-full flex justify-between p-4 mt-10">
        <div></div>
        <div className="bg-darkpurple w-[280px] text-center p-2 px-20 ml-15 rounded-md text-white">
          Recumendation
        </div>
        <button className=" bg-nuetralpurple w-[60px] text-center text-white px-4 py-2 ml-14 rounded-md"></button>
      </div>
      <div className="pl-20">
                   <Carousel responsive={responsive}>
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </Carousel>
      </div>
      {/* <ChatBotPage visible = {visibleChatBot} toggleChatBot = {toggleChatBot}/> */}
    </div>
  );
};

export default MainPage;
