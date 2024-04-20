import React from 'react';
import { FaBars, FaShoppingBasket, FaUserCircle } from 'react-icons/fa';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

type Props = {
  sidebarToggle: boolean;
  setSidebarToggle: (sidebarToggle: boolean) => void;

};

const Navbar = ({ sidebarToggle, setSidebarToggle }: Props) => {
    const navigate = useNavigate();

  // Event handler for the Sign In button click
  const handleSigninClick = () => {
    navigate('/signin'); // Use navigate to go to '/signin'
  };
  const handleSignupClick =() => {
    navigate("/signup")
  }
  const iconPosition = sidebarToggle ? 'flex-end' : 'flex-start';
  return (
    <nav className={`bg-semiwhite text-darkpurple p-4 py-3 flex justify-between ${sidebarToggle ? "" : "md:ml-64 ml-36"}`}>
      <div className="flex items-center" style={{ justifyContent: iconPosition }}>
        <FaBars className=" me-4 relative cursor-pointer z-[2]" onClick={() => setSidebarToggle(!sidebarToggle)} />
      </div>
      <span className=" font-semibold">Market</span>
      
      <div className="flex items-center gap-x-2">
        <button className="bg-purple-800 text-white border-2 border-purple-800 hover:opacity-50 font-bold py-2 px-4 rounded" onClick={handleSigninClick}>
        Sign in
        </button>
        <button className="bg-transparent hover:opacity-50 border-2 border-purple-800  font-bold py-2 px-4 rounded" onClick={handleSignupClick} >
        Sign up
        </button>
        <a href="/shoppingcart">
          <FaShoppingBasket className=" w-6 h-6 mt-1 cursor-pointer" />
        </a>
        <FaUserCircle className=" w-6 h-6 mt-1 cursor-pointer" />
      </div>
    </nav>
  );
}

export default Navbar;


