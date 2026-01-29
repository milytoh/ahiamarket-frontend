import React, { useState } from "react";

import Header from "@/components/profile/Header";

import Sidebar from "@/components/profile/SideBer";
import MobileNav from "@/components/profile/MobileNav";
import ProfileHero from "@/components/profile/ProfileHero";
import StatsCards from "@/components/profile/StatsCards";


import PersonalInfo from "@/components/profile/Personalinfo";
import TrustScore from "@/components/profile/Trustscore";
import DeliveryAddresses from "@/components/profile/Deliveryaddresses";
import WalletCTA from "@/components/profile/Walletcta";

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
