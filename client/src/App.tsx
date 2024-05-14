import React, { useState } from "react"; // Properly combined React imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import NewMainPage from "./pages/NewMainPage";
import SignupPage from "./pages/SignupPage";
import SigninPage from "./pages/SigninPage";
import ShoppingCartPage from "./pages/CheckoutPage";
import ProductViewPage from "./pages/ProductViewPage";
import PaymentSuccessPage from "./pages/PaymentSuccessPage";
import UserProfile from "./pages/UserProfile"; // Importing UserProfile component
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import PaymentPage from "./pages/PaymentPage";
import Contactus from "./pages/Contactus";

function App() {
  const [sidebarToggle, setSidebarToggle] = useState(true);

  return (
    <React.StrictMode>
      <Router>
        <Sidebar sidebarToggle={sidebarToggle} role="user" />
        <Dashboard
          sidebarToggle={sidebarToggle}
          setSidebarToggle={setSidebarToggle}
        />
        <Routes>
          <Route path="/" element={<NewMainPage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/paymentpage" element={<PaymentPage />} />
          <Route path="/paymentsuccess" element={<PaymentSuccessPage />} />
          <Route path="/productview" element={<ProductViewPage />} />
          <Route path="/shoppingcart" element={<ShoppingCartPage />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/userprofile" element={<UserProfile />} />{" "}
          {/* Added UserProfile route */}
        </Routes>
        <Footer />
      </Router>
    </React.StrictMode>
  );
}

export default App;
