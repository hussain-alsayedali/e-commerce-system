import React from 'react';
import { FaBars, FaHeadset, FaChartBar, FaBox, FaHistory, FaHeart, FaTruck } from 'react-icons/fa';

type Props = {
  sidebarToggle: boolean;
  role: 'admin' | 'user';
};

function Sidebar({ sidebarToggle, role }: Props) {
  const adminItems = [
    { name: 'Products', icon: FaBox, link: "product-view" },
    { name: 'Customer Service', icon: FaHeadset, link: "#" },
    { name: 'Dashboard', icon: FaChartBar, link: "#" },
  ];

  const userItems = [
    { name: 'Orders', icon: FaBox, link: "product-view" },
    { name: 'History', icon: FaHistory, link: "#" },
    { name: 'Favorite', icon: FaHeart , link: "#" },
    { name: 'Order Tracker', icon: FaTruck, link: "#" },
    { name: 'Customer Service', icon: FaHeadset, link: "#"},
  ];

  const itemsToRender = role === 'admin' ? adminItems : userItems;

  return (
    <div className={`${sidebarToggle ? 'hidden' : 'block'} z-[2] w-36 md:w-64 bg-nuetralpurple fixed h-full px-4 py-2`}>
      <ul className="mt-3 text-xs text-white font-bold md:text-sm">
        {itemsToRender.map((item) => (
          <li key={item.name} className="mb-2">
            <a href={item.link} className="rounded hover:bg-purple-800 p-3 flex items-center space-x-3">
              <item.icon className="inline-block w-6 h-6 mr-2" />
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
