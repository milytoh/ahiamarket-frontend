
import { Outlet } from "react-router-dom";

import React, { useState } from "react";
import VendorSidebar from "./VendorSidebar";
import VendorTopbar from "./VendorTopbar";
import VendorMobileNav from "./VendorMobileNav";





export default function VendorDashboardLayout({
  
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-[#F9F9F9] text-[#333333] min-h-screen font-sans overflow-x-hidden">
      {/* Sidebar - Desktop */}
      <VendorSidebar />

      {/* Topbar */}
      <VendorTopbar
        title={'hh'}
        onMobileMenuClick={() => setSidebarOpen(true)}
      />

      {/* Mobile Navigation */}
      <VendorMobileNav
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main Content Area */}
      <main className="md:ml-64 min-h-screen pt-5 md:pt-0 transition-all duration-300">
        <Outlet />
      </main>
    </div>
  );
}
