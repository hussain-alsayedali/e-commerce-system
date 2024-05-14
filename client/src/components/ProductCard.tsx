import React from "react";
import { FaHeart } from "react-icons/fa";
// import { useFavorites } from './FavoritesContext'; // Ensure this path is correct
import { Product } from "../pages/interfaces"; // Adjust the path as necessary

// Define props interface for ProductCard component
interface ProductCardProps {
  product: Product; // Product interface imported from interfaces file
}

// ProductCard component receives product object as props and renders a product card
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // const { addFavorite } = useFavorites(); // Uncomment if using a favorites context

  // const handleAddToFavorites = () => {
  //     addFavorite(product); // Uncomment if adding a product to favorites
  // };

  return (
    // Product card container with flex layout and border
    <div className="flex flex-col items-center justify-center align-middle py-4 border-2 border-black w-44 rounded-md">
      {/* Product image */}
      <img
        className="aspect-[16/9] h-24 object-contain"
        src={product.image} // Product image source
        alt={product.name} // Product name as alternative text
      />
      {/* Product details */}
      <div className="flex flex-col justify-center items-center mt-4">
        {/* Product name */}
        <h2 className="font-semibold text-lg">{product.name}</h2>
        {/* Keywords */}
        <p className="text-gray-400">{product.keywords}</p>
        {/* Description */}
        <p className="text-gray-400">{product.description}</p>
        {/* Price */}
        <div className="flex items-center">
          <p className="text-sm font-medium text-gray-900">
            {product.price} SR
          </p>
          {/* Button to add product to favorites */}
          <button className="pl-4 pt-1 ">
            <FaHeart size={16} /> {/* Heart icon */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; // Export the ProductCard component
