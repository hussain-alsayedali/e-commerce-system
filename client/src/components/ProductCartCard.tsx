import { FaTrash, FaHeart } from "react-icons/fa";
import emptycart from "./src/assets/emptycart.png";

// ProductCartCard component receives props for product details and functions to add/remove units
export default function ProductCartCard({
  name,
  unitPrice,
  description,
  units,
  addUnit,
  removeUnit,
}: {
  name: string;
  unitPrice: number;
  description: string;
  units: number;
  addUnit: () => void;
  removeUnit: () => void;
}) {
  return (
    // Container for product cart card with border, background, and padding
    <div className="flex-col w-11/12 border border-purple-300 bg-purple-50 rounded p-4 mt-4 ">
      {/* Content of the product cart card */}
      <div className="flex gap-y-2 justify-between">
        {/* Left side: product details */}
        <div>
          {/* Product name */}
          <h3 className="text-l font-semibold">product Name :{name}</h3>
          {/* Product description */}
          <p>description: {description}</p>
          {/* Unit price */}
          <p>unit price :{unitPrice}</p>
          {/* Total price for the units */}
          <p>total : {unitPrice * units} </p>
        </div>
        {/* Right side: image */}
        <div>
          <img src={emptycart} alt="" /> {/* Image for the cart */}
        </div>
      </div>
      {/* Controls for adding/removing units and actions */}
      <div className="flex justify-between">
        {/* Controls for adding/removing units */}
        <div className="flex gap-x-4">
          {/* Button to remove unit */}
          <button
            onClick={removeUnit}
            className="p-2 bg-purple-300 w-12 rounded hover:opacity-50"
          >
            -
          </button>
          {/* Display the number of units */}
          <span className="border p-2  w-12 rounded text-center">{units}</span>
          {/* Button to add unit */}
          <button
            onClick={addUnit}
            className="p-2 bg-purple-300 w-12 rounded hover:opacity-50"
          >
            +
          </button>
        </div>
        {/* Actions: Add to favorites and remove from cart */}
        <div className="flex gap-8">
          {/* Button to add to favorites */}
          <button className="hover:opacity-50">
            <FaHeart />
          </button>
          {/* Button to remove from cart */}
          <button className="hover:opacity-50">
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
}
