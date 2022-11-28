import React from 'react';
import Header from './Header';
import Sidebar from './SideNavbar';

function Layout({ children }) {
  return (
    <div className="h-screen flex flex-row justify-start">
      {/* LEFT  */}
      <Sidebar />
      {/* RIGHT */}
      <div className=" flex-1 p-4">
        <Header />
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Layout;
