import React from 'react';
import { FaBars, FaHeadset, FaChartBar, FaBox } from 'react-icons/fa';

type Props = {
  sidebarToggle: boolean;
};

function Sidebar({ sidebarToggle }: Props) {
  const iconPosition = sidebarToggle ? 'flex-end' : 'flex-start';

  return (
    <div className={`${sidebarToggle ? 'hidden' : 'block'} w-36 md:w-64 z-[2] bg-nuetralpurple fixed h-full px-4 py-2`}>
      <div className="my-2 text-xs text-white">
        {/* Add any other content here */}
      </div>
      <ul className="mt-3 text-xs text-white font-bold md:text-sm">
        <li className="mb-2">
          <a href="#" className="rounded hover:bg-gray-700 p-3 flex items-center space-x-3">
            <FaBox className="inline-block w-6 h-6 mr-2 -mt-2" />
            Products
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="rounded hover:bg-gray-700 p-3 flex items-center space-x-3">
            <FaHeadset className="inline-block w-6 h-6 mr-2 -mt-2" />
            Customer Service
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="rounded hover:bg-gray-700 p-3 flex items-center space-x-3">
            <FaChartBar className="inline-block w-6 h-6 mr-2 -mt-2" />
            Dashboard
          </a>
        </li>
        {/* Add more menu items here */}
      </ul>
    </div>
  );
}

export default Sidebar;
