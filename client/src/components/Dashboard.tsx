import React from "react"; // Import React to use JSX and React features
import Navbar from "./Navbar"; // Import the Navbar component

// Define the props type for Dashboard component
type Props = {
  sidebarToggle: boolean; // A boolean indicating whether the sidebar is toggled
  setSidebarToggle: (sidebarToggle: boolean) => void; // A function to update the sidebarToggle state
};

// Dashboard component that receives props of type Props
function Dashboard({ sidebarToggle, setSidebarToggle }: Props) {
  console.log(sidebarToggle); // Log the current state of sidebarToggle for debugging purposes

  return (
    <div className={"w-full"}>
      {" "}
      {/* Container div with full width */}
      {/* Render Navbar component and pass sidebarToggle and setSidebarToggle as props */}
      <Navbar
        sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}
      />
    </div>
  );
}

export default Dashboard; // Export the Dashboard component as the default export
