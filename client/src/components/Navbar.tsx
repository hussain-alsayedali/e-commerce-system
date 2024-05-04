import React from 'react';
import { FaBars, FaShoppingBasket, FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

type Props = {
  sidebarToggle: boolean;
  setSidebarToggle: (sidebarToggle: boolean) => void;
};

const Navbar = ({ sidebarToggle, setSidebarToggle }: Props) => {
    const navigate = useNavigate();
    const isAuthenticated = localStorage.getItem('token') !== null;

    const handleSigninClick = () => {
        navigate('/signin');
    };

    const handleSignupClick = () => {
        navigate('/signup');
    };

    const handleLogoutClick = () => {
        localStorage.removeItem('token');
        navigate('/signin');  // Redirect to sign in after logging out
    };

    const handleProfileClick = () => {
        navigate('/userprofile');  // Navigate to user profile page
    };

    const iconPosition = sidebarToggle ? 'flex-end' : 'flex-start';

    return (
        <nav className={`bg-semiwhite text-darkpurple p-4 py-3 flex justify-between ${sidebarToggle ? "" : "md:ml-64 ml-36"}`}>
            <div className="flex items-center" style={{ justifyContent: iconPosition }}>
                <FaBars className="me-4 relative cursor-pointer z-[2] hover:opacity-50" onClick={() => setSidebarToggle(!sidebarToggle)} />
            </div>
            <span className="font-semibold">Market</span>
            
            <div className="flex items-center gap-x-2">
                {!isAuthenticated ? (
                    <>
                        <button className="bg-purple-800 text-white border-2 border-purple-800 hover:opacity-50 font-bold py-2 px-4 rounded" onClick={handleSigninClick}>
                            Sign in
                        </button>
                        <button className="bg-transparent hover:opacity-50 border-2 border-purple-800 font-bold py-2 px-4 rounded" onClick={handleSignupClick}>
                            Sign up
                        </button>
                    </>
                ) : (
                    <>
                        <button className="bg-purple-800 text-white border-2 border-purple-800 hover:opacity-50 font-bold py-2 px-4 rounded" onClick={handleLogoutClick}>
                            Logout
                        </button>
                        <FaUserCircle className="w-6 h-6 mt-1 cursor-pointer hover:opacity-50" onClick={handleProfileClick} />
                    </>
                )}
                <a href="/shoppingcart">
                    <FaShoppingBasket className="w-6 h-6 mt-1 cursor-pointer hover:opacity-50" />
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
