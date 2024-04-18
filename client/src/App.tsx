import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import SignupPage from "./pages/SignupPage.tsx";
import SigninPage from "./pages/SinginPage.tsx";
import ShoppingCartPage from "./pages/ShoppingCartPage.tsx";
import React from "react";
import CheckoutPage from "./pages/CheckoutPage.tsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     <CheckoutPage />
    
     
    </>
  );
}

export default App;
