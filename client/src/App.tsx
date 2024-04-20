import { useState } from "react";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage from "./pages/MainPage";
import SignupPage from "./pages/SignupPage";
import SigninPage from "./pages/SinginPage";  // Corrected the typo in the import
import ShoppingCartPage from "./pages/ShoppingCartPage";
import ProductViewPage from "./pages/ProductViewPage";
import PaymentSuccessPage from "./pages/PaymentSuccessPage";

import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import PaymentForm from './components/PaymentForm';
import PaymentPage from "./pages/PaymentPage";

function App() {
  const [sidebarToggle, setSidebarToggle] = useState<boolean>(true);

  return (
    <Router>
      <div className="flex">
      <Sidebar sidebarToggle={sidebarToggle} role="user"/>
      <Dashboard sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle}/>
      </div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/paymentpage" element={<PaymentPage />} />
        <Route path="/paymentsuccess" element={<PaymentSuccessPage />} />
        <Route path="/productview" element={<ProductViewPage />} />
        <Route path="/shoppingcart" element={<ShoppingCartPage />} />
      </Routes>
      <Footer/>
    </Router>

    
  );
}

export default App;

