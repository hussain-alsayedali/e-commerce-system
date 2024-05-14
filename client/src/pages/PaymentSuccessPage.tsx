import { Link } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from '../components/Sidebar.tsx';
import Dashboard from '../components/Dashboard.tsx';

const PaymentSuccessPage = () => {
    const [sidebarToggle, setSidebarToggle] = useState(true);
    return (
      <>
      <Sidebar sidebarToggle={sidebarToggle} role="user"/>
      <Dashboard sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle}/>
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-purple-900 text-white">
            <h1 className="text-4xl font-bold">Congratulations on Your Successful Shopping!</h1>
            <p className="text-xl mt-4">Thank you for your purchase.</p>
            <div className="mt-8 space-x-4">
                <Link to="/order-details" className="px-6 py-3 rounded bg-white text-purple-900 font-semibold hover:bg-gray-100">See Order Details</Link>
                <Link to="/" className="px-6 py-3 rounded bg-white text-purple-900 font-semibold hover:bg-gray-100">Continue Shopping</Link>
            </div>
        </div>
        </>
    );
};

export default PaymentSuccessPage;
