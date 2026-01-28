import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MobileNav from "./components/MobileNav";
import ProfileHero from "./components/ProfileHero";
import StatsCards from "./components/StatsCards";
import PersonalInfo from "./components/PersonalInfo";
import TrustScore from "./components/TrustScore";
import DeliveryAddresses from "./components/DeliveryAddresses";
import WalletCTA from "./components/WalletCTA";

const Profile: React.FC = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <section>
      <Header onMenuClick={() => setIsMobileNavOpen(true)} />

      <div className="flex w-full max-w-[1440px] mx-auto min-h-[calc(100vh-76px)]">
        <Sidebar />

        <main className="flex-1 w-full p-4 md:p-8 xl:p-10">
          <div className="max-w-5xl mx-auto space-y-6 md:space-y-8">
            <ProfileHero />
            <StatsCards />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              <PersonalInfo />
              <TrustScore />
            </div>

            <DeliveryAddresses />
            <WalletCTA />

            <div className="h-10 md:h-16"></div>
          </div>
        </main>
      </div>

      <MobileNav
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
      />
    </section>
  );
};

export default Profile;
