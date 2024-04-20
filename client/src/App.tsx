import { useState } from "react";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage from "./pages/MainPage";
import SignupPage from "./pages/SignupPage";
import SigninPage from "./pages/SinginPage";  // Corrected the typo in the import
import ShoppingCartPage from "./pages/ShoppingCartPage";
import ProductViewPage from "./pages/ProductViewPage";
import PaymentSuccessPage from "./pages/PaymentSuccessPage";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import PaymentForm from './components/PaymentForm';

function App() {
  const [sidebarToggle, setSidebarToggle] = useState<boolean>(true);

  return (
    <Router>
           <div className="flex">
      <Sidebar sidebarToggle={sidebarToggle} role="user"/>
      <Dashboard sidebarToggle={sidebarToggle}
                 setSidebarToggle={setSidebarToggle}/>
    </div>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/payment-form" element={<PaymentForm />} />
            <Route path="/payment-success" element={<PaymentSuccessPage />} />
            <Route path="/product-view" element={<ProductViewPage />} />
            <Route path="/signin" element={<SigninPage />} />
            <Route path="/signup" element={<SignupPage />} />  // Corrected to show SignupPage
            <Route path="/shopping-cart" element={<ShoppingCartPage />} />
          </Routes>
    </Router>
  );
}

export default App;

