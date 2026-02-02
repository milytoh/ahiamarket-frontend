import React from "react";

import { useApi } from "@/hooks/useApi";
import { useEffect, useState } from "react";

import ProfileHero from "@/components/profile/ProfileHero";
import StatsCards from "@/components/profile/StatsCards";
import PersonalInfo from "@/components/profile/Personalinfo";
import TrustScore from "@/components/profile/Trustscore";
import DeliveryAddresses from "@/components/profile/Deliveryaddresses";
import WalletCTA from "@/components/profile/Walletcta";

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

interface ProfilePayload {
  user: UserProfile;
  stats: ProfileStats;
  wallet: WalletInfo;
  trustScore: TrustScore;
  recentOrders: RecentOrder[];
}

export interface UserProfile {
  id: string;
  fullName: string;
  email: string;
  avatar?: string;
  memberSince: string;
  trustScore?: number
}

interface ProfileStats {
  totalOrders: number;
  completedOrders: number;
  disputes: number;
}

interface WalletInfo {
  balance: number;
  currency: string;
}

interface TrustScore {
  value: number;
  label: "Excellent" | "Good" | "Fair" | "Poor";
  breakdown: TrustScoreItem[];
}

interface TrustScoreItem {
  icon: string;
  label: string;
  value: string;
  isPrimary: boolean;
}

interface RecentOrder {
  id: string;
  amount: number;
  status: "completed" | "pending" | "disputed";
  createdAt: string;
}

type ProfileResponse = ApiResponse<ProfilePayload>;

const Profile: React.FC = () => {
  const [profile, setProfile] = useState<ProfileResponse["data"] | null>(null);
  //using custom hook
  const { get, loading, error } = useApi<ProfileResponse>(
    "http://localhost:3000/api/user/profile",
  );

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await get();
        console.log(response);
        setProfile(response.profile);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="max-w-5xl mx-auto space-y-6 md:space-y-8">
      <ProfileHero
        fullName={profile?.user.fullName!}
        email={profile?.user.email!}
        id={profile?.user.id!}
        memberSince={profile?.user.memberSince!}
        trustScore={profile?.trustScore!.value!}
      />
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
