import React from 'react';
import { FaHeart } from 'react-icons/fa';
// import { useFavorites } from './FavoritesContext'; // Ensure this path is correct
import { Product } from '../pages/interfaces'; // Adjust the path as necessary

interface ProductCardProps {
    product: Product;

}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
//     const { addFavorite } = useFavorites();

//     const handleAddToFavorites = () => {
//         addFavorite(product);
//     };

    return (
        <div className="flex flex-col items-center justify-center align-middle py-4 border-2 border-black w-44 rounded-md">
            <img
                className="aspect-[16/9] h-24 object-contain"
                src={product.image}
                alt={product.name}
            />
            <div className="flex flex-col justify-center items-center mt-4">
                <h2 className="font-semibold text-lg">{product.name}</h2>
                <p className="text-gray-400">{product.keywords}</p>
                <p className="text-gray-400">{product.description}</p>
                <div>
                    <span>{product.price} SR</span>
                    <button className="pl-4 pt-1 ">
                        <FaHeart size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;


