import { useState } from "react";
import ProductCartCard from "../components/ProductCartCard";
import Button from "../components/Button";

export default function ShoppingCartPage() {
  const [cart, setCart] = useState([
    {
      name: "potatoShip",
      unitPrice: 50,
      description: "crispy potato ships",
      units: 5,
    },
    {
      name: "potatoShip",
      unitPrice: 50,
      description: "crispy potato ships",
      units: 5,
    },
    {
      name: "potatoShip",
      unitPrice: 50,
      description: "crispy potato ships",
      units: 5,
    },
  ]);
  function handleAddUnit(index: number) {
    setCart((prevCart) => {
      const newCart = [...prevCart];
      newCart[index].units += 1;
      return newCart;
    });
  }
  function handleRemoveUnit(index: number) {
    setCart((prevCart) => {
      const newCart = [...prevCart];
      newCart[index].units -= 1;
      return newCart;
    });
  }

  return (
    <div className="flex flex-col align-middle justify-center items-center">
      {cart.map((product, index: any) => {
        return (
          <ProductCartCard
            name={product.name}
            unitPrice={product.unitPrice}
            description={product.description}
            units={product.units}
            addUnit={() => handleAddUnit(index)}
            removeUnit={() => handleRemoveUnit(index)}
          />
        );
      })}
      <div className="w-11/12  p-8">
        <a href="/paymentpage"> 
        <Button title="Checkout" />
        </a>
      </div>
    </div>
  );
}
