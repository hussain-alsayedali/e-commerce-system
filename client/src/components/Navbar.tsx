import React from "react";
import { FaBars, FaShoppingBasket, FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

type Props = {
  sidebarToggle: boolean;
  setSidebarToggle: (sidebarToggle: boolean) => void;
};

const Navbar = ({ sidebarToggle, setSidebarToggle }: Props) => {
  // Hook for navigation
  const navigate = useNavigate();
  // Check if the user is authenticated
  const isAuthenticated = localStorage.getItem("token") !== null;

  // Function to handle sign-in button click
  const handleSigninClick = () => {
    navigate("/signin");
  };

  // Function to handle sign-up button click
  const handleSignupClick = () => {
    navigate("/signup");
  };

  // Function to handle logout button click
  const handleLogoutClick = () => {
    // Remove token from local storage
    localStorage.removeItem("token");
    // Redirect to sign-in page after logging out
    navigate("/signin");
  };

  // Function to handle profile icon click
  const handleProfileClick = () => {
    // Navigate to user profile page
    navigate("/userprofile");
  };

  // Determine the position of the icon based on sidebar toggle state
  const iconPosition = sidebarToggle ? "flex-end" : "flex-start";

  return (
    <nav
      className={`bg-semiwhite text-darkpurple p-4 py-3 flex justify-between ${
        sidebarToggle ? "" : "md:ml-64 ml-36"
      }`}
    >
      <div
        className="flex items-center"
        style={{ justifyContent: iconPosition }}
      >
        {/* Hamburger menu icon */}
        <FaBars
          className="me-4 relative cursor-pointer z-[2] hover:opacity-50"
          onClick={() => setSidebarToggle(!sidebarToggle)}
        />
      </div>
      {/* Brand name */}
      <span className="font-bold mt-2 text-lg">Market</span>

      <div className="flex items-center gap-x-2">
        {/* Conditional rendering based on authentication status */}
        {!isAuthenticated ? (
          <>
            {/* Sign-in button */}
            <button
              className="bg-purple-800 text-white border-2 border-purple-800 hover:opacity-50 font-bold py-2 px-4 rounded"
              onClick={handleSigninClick}
            >
              Sign in
            </button>
            {/* Sign-up button */}
            <button
              className="bg-transparent hover:opacity-50 border-2 border-purple-800 font-bold py-2 px-4 rounded"
              onClick={handleSignupClick}
            >
              Sign up
            </button>
          </>
        ) : (
          <>
            {/* Logout button */}
            <button
              className="bg-purple-800 text-white border-2 border-purple-800 hover:opacity-50 font-bold py-2 px-4 rounded"
              onClick={handleLogoutClick}
            >
              Logout
            </button>
            {/* User profile icon */}
            <FaUserCircle
              className="w-6 h-6 mt-1 cursor-pointer hover:opacity-50"
              onClick={handleProfileClick}
            />
          </>
        )}
        {/* Shopping basket icon with link to shopping cart */}
        <a href="/shoppingcart">
          <FaShoppingBasket className="w-6 h-6 mt-1 cursor-pointer hover:opacity-50" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
