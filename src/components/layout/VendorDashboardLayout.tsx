
import React, { useState } from "react";
import VendorSidebar from "./VendorSidebar";
import VendorTopbar from "./VendorTopbar";
import VendorMobileNav from "./VendorMobileNav";

interface VendorDashboardLayoutProps {
  children: React.ReactNode;
  title?: string;
}

export default function VendorDashboardLayout({
  children,
  title = "Overview",
}: VendorDashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-[#F9F9F9] text-[#333333] min-h-screen font-sans overflow-x-hidden">
      {/* Sidebar - Desktop */}
      <VendorSidebar />

      {/* Topbar */}
      <VendorTopbar
        title={title}
        onMobileMenuClick={() => setSidebarOpen(true)}
      />

      {/* Mobile Navigation */}
      <VendorMobileNav
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main Content Area */}
      <main className="md:ml-64 min-h-screen pt-16 md:pt-0 transition-all duration-300">
        {children}
      </main>
    </div>
  );
}
