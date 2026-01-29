import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import ProfileSidebar from "./ProfileSidebar";
import ProfileHeader from "./ProfileHeader";
import ProfileMobileNav from "./ProfileMobileNav";

const ProfileLayout: React.FC = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const handleMobileNavToggle = () => setMobileNavOpen(!mobileNavOpen);
  const handleMobileNavClose = () => setMobileNavOpen(false);

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar for desktop */}
      <ProfileSidebar  />

      {/* Mobile Nav */}
      <ProfileMobileNav
        isOpen={mobileNavOpen}
        onClose={handleMobileNavClose}
        
      />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header always visible */}
        <ProfileHeader onMenuClick={handleMobileNavToggle} />

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default ProfileLayout;
