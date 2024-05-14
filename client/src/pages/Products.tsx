import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface Product {
  name: string;
  description: string;
  price: string;
  image: string;
}

interface Catagory {
  name: string;
  products: Product[];
}

function ProductForm() {
  const products: Product[] = [
    { name: "Prod1", description: "des1", price: "50", image: "" },
    { name: "Prod2", description: "des2", price: "50", image: "" },
    { name: "Prod3", description: "des3", price: "50", image: "" },
    { name: "Prod4", description: "des4", price: "50", image: "" },
    { name: "Prod5", description: "des5", price: "50", image: "" },
  ];

  const catagory: Catagory[] = [
    {
      name: "catag1",
      products: [
        { name: "Prod1", description: "des1", price: "150", image: "" },
        { name: "Prod2", description: "des2", price: "150", image: "" },
        { name: "Prod3", description: "des3", price: "150", image: "" },
        { name: "Prod4", description: "des4", price: "150", image: "" },
        { name: "Prod5", description: "des5", price: "150", image: "" },
      ],
    },
    {
      name: "catag2",
      products: [
        { name: "Prod1", description: "des1", price: "50", image: "" },
        { name: "Prod2", description: "des2", price: "50", image: "" },
        { name: "Prod3", description: "des3", price: "50", image: "" },
        { name: "Prod4", description: "des4", price: "50", image: "" },
        { name: "Prod5", description: "des5", price: "50", image: "" },
      ],
    },
    {
      name: "catag3",
      products: [
        { name: "Prod1", description: "des1", price: "150", image: "" },
        { name: "Prod2", description: "des2", price: "150", image: "" },
        { name: "Prod3", description: "des3", price: "150", image: "" },
        { name: "Prod4", description: "des4", price: "150", image: "" },
        { name: "Prod5", description: "des5", price: "150", image: "" },
      ],
    },
  ];

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

  return (
    <ul>
      {catagory.map((catagory) => (
        <li>
          <Carousel responsive={responsive} className="">
            {catagory.products.map((product, key) => {
              return (
                <div className="flex flex-col items-center justify-center align-middle py-4 ml-10 mt-10 border-2 border-black w-44 rounded-md">
                  <div className="flex flex-col" key={key}>
                    <img
                      className="aspect-[16/9] h-24 object-contain"
                      src="./src/assets/emptycart.png"
                      alt=""
                    />
                    <div className="flex  flex-col justify-center items-center mt-4">
                      <h2 className="font-semibold text-lg">{product.name}</h2>
                      <p className="text-gray-400">{product.description}</p>
                      <div>
                        <span className="">{product.price} SR</span>
                        <button className="pl-4 pt-1">
                          <FaHeart size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </li>
      ))}
    </ul>
  );
}

export default ProductForm;
