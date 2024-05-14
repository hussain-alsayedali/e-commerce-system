import PaymentForm from '../components/PaymentForm.tsx';
import { useState } from 'react';
import Sidebar from '../components/Sidebar.tsx';
import Dashboard from '../components/Dashboard.tsx';
const PaymentPage = () => {
    const [sidebarToggle, setSidebarToggle] = useState(true);
    return (
      <>
      <Sidebar sidebarToggle={sidebarToggle} role="user"/>
      <Dashboard sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle}/>
        <div className="min-h-screen flex items-center justify-center bg-purple-50">
            <PaymentForm />
        </div>
        </>
    );
};

export default PaymentPage;
