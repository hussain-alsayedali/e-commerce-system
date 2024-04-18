import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import SignupPage from "./pages/SignupPage.tsx";
import SigninPage from "./pages/SinginPage.tsx";
import ShoppingCartPage from "./pages/ShoppingCartPage.tsx";
import ProductViewPage from "./pages/ProductViewPage.tsx";
import AddProduct from "./pages/AddProduct.tsx";
import React from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AddProduct />
    </>
  );
}

export default App;
