import React, { useState } from "react"; // Properly combined React imports
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from "./pages/MainPage";
import SignupPage from "./pages/SignupPage";
import SigninPage from "./pages/SigninPage";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import ProductViewPage from "./pages/ProductViewPage";
import PaymentSuccessPage from "./pages/PaymentSuccessPage";
import UserProfile from "./pages/UserProfile"; // Importing UserProfile component
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import PaymentPage from "./pages/PaymentPage";
import Contactus from "./pages/Contactus";
import AddProduct from "./pages/AddProduct"
import AddCategory from "./pages/AddCategory"

function App() {
  const [sidebarToggle, setSidebarToggle] = useState(true);

  return (
    <React.StrictMode>
      <Router>
        <Sidebar sidebarToggle={sidebarToggle} role="admin"/>
        <Dashboard sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle}/>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/paymentpage" element={<PaymentPage />} />
          <Route path="/paymentsuccess" element={<PaymentSuccessPage />} />
          <Route path="/productview" element={<ProductViewPage />} />
          <Route path="/shoppingcart" element={<ShoppingCartPage />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/addcategory" element={<AddCategory />} />
          
          <Route path="/userprofile" element={<UserProfile />} /> {/* Added UserProfile route */}
        </Routes>
        <Footer/>
      </Router>
    </React.StrictMode>
  );
}

export default App;
