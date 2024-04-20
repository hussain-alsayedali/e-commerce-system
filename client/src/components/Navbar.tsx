import React from 'react';
import { FaBars, FaShoppingBasket, FaUserCircle } from 'react-icons/fa';

type Props = {
  sidebarToggle: boolean;
  setSidebarToggle: (sidebarToggle: boolean) => void;
};

function Navbar({ sidebarToggle, setSidebarToggle }: Props) {
  const iconPosition = sidebarToggle ? 'flex-end' : 'flex-start';

  return (
    <nav className={`bg-nuetralpurple p-4 py-3 flex justify-between ${sidebarToggle ? "" : "md:ml-64 ml-36"}`}>
      <div className="flex items-center" style={{ justifyContent: iconPosition }}>
        <FaBars className="text-white me-4 relative cursor-pointer z-[2]" onClick={() => setSidebarToggle(!sidebarToggle)} />
      </div>
      <span className="text-white font-semibold">Market</span>

      <div className="flex items-center gap-x-2">
        <FaShoppingBasket className="text-white w-6 h-6 mt-1 cursor-pointer" />
        <FaUserCircle className="text-white w-6 h-6 mt-1 cursor-pointer" />
      </div>
    </nav>
  );
}

export default Navbar;



