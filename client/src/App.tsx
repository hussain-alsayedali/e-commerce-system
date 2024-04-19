import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import SignupPage from "./pages/SignupPage.tsx";
import SigninPage from "./pages/SinginPage.tsx";
import ShoppingCartPage from "./pages/ShoppingCartPage.tsx";
import ProductViewPage from "./pages/ProductViewPage.tsx";
import AddProduct from "./pages/AddProduct.tsx";
import PaymentPage from "./pages/PaymentPage.tsx";
import React from "react";
import MainPage from "./pages/MainPage.tsx";


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaymentForm from './components/PaymentForm';
import PaymentSuccessPage from './pages/PaymentSuccessPage';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
<<<<<<< Updated upstream
       <Router>
      <Routes>
        <Route path="/" element={<PaymentPage />} />
        <Route path="/payment-form" element={<PaymentForm />} />
        <Route path="/payment-success" element={<PaymentSuccessPage />} />
      </Routes>
    </Router>
=======
      <MainPage />
>>>>>>> Stashed changes
    </>
  );
}

export default App;
