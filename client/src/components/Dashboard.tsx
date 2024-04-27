import React from 'react';
import Navbar from './Navbar';
type props = {
  sidebarToggle: boolean,
  setSidebarToggle : (sidebarToggle: boolean) => void
}

function Dashboard({ sidebarToggle, setSidebarToggle }: props) {
  console.log(sidebarToggle)
  return (
    <div className={'w-full'}>
      <Navbar sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle} />
    </div>
  );
}

export default Dashboard;
