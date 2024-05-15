import React from "react";
import {
  FaBars,
  FaHeadset,
  FaChartBar,
  FaBox,
  FaPlus,
  FaHistory,
  FaHeart,
  FaTruck,
  FaHome,
} from "react-icons/fa";

// Define the props for the Sidebar component
type Props = {
  sidebarToggle: boolean;
  role: "admin" | "user";
};

// Sidebar component
function Sidebar({ sidebarToggle, role }: Props) {
  // Define items for the admin role
  const adminItems = [
    { name: "Home", icon: FaHome, link: "/" },
    { name: "Products", icon: FaBox, link: "productspage" },
    { name: "Adding Products", icon: FaPlus, link: "addproduct" },
    { name: "Notes", icon: FaChartBar, link: "/notes" },
  ];

  // Define items for the user role
  const userItems = [
    { name: "Home", icon: FaHome, link: "/" },
    { name: "Orders", icon: FaBox, link: "/" },
    { name: "History", icon: FaHistory, link: "/" },
    { name: "Favorite", icon: FaHeart, link: "/" },
    { name: "Order Tracker", icon: FaTruck, link: "/" },
    { name: "Contact us", icon: FaHeadset, link: "/contactus" },
  ];

  // Determine which items to render based on the user's role
  const itemsToRender = role === "admin" ? adminItems : userItems;

  return (
    // Sidebar container
    <div
      className={`${
        sidebarToggle ? "hidden" : "block"
      } z-[2] w-36 md:w-64 bg-nuetralpurple fixed h-full px-4 py-2`}
    >
      {/* List of sidebar items */}
      <ul className="mt-3 text-xs text-white font-bold md:text-sm">
        {/* Map through the items to render */}
        {itemsToRender.map((item) => (
          <li key={item.name} className="mb-2">
            {/* Sidebar item */}
            <a
              href={item.link}
              className="rounded hover:bg-purple-800 p-3 flex items-center space-x-3"
            >
              {/* Sidebar icon */}
              <item.icon className="inline-block w-6 h-6 mr-2" />
              {/* Sidebar item name */}
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
