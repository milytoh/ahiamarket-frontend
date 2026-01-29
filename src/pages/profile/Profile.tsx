import React from "react";

import ProfileHero from "@/components/profile/ProfileHero";
import StatsCards from "@/components/profile/StatsCards";
import PersonalInfo from "@/components/profile/Personalinfo";
import TrustScore from "@/components/profile/Trustscore";
import DeliveryAddresses from "@/components/profile/Deliveryaddresses";
import WalletCTA from "@/components/profile/Walletcta";

const Profile: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-6 md:space-y-8">
      <ProfileHero />
      <StatsCards />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        <PersonalInfo />
        <TrustScore />
      </div>

      <DeliveryAddresses />
      <WalletCTA />

      <div className="h-10 md:h-16" />
    </div>
  );
};

export default Profile;
