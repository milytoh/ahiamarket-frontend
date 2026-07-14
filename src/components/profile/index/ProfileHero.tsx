const API_URL = import.meta.env.VITE_API_URL;

import React from "react";
import { UserProfile } from "@/pages/profile/Profile";
import { useNavigate } from "react-router-dom";

import {
  HiCheckBadge,
  HiOutlinePencilSquare,
  HiOutlineShare,
} from "react-icons/hi2";

const ProfileHero: React.FC<UserProfile> = ({
  fullName,
  email,
  memberSince,
  trustScore,
  profileImage,
}) => {
  const formattedMemberSince = new Date(memberSince).toLocaleDateString(
    "en-US",
    {
      month: "short",
      year: "numeric",
    },
  );

  const clampScore = (score: number) => Math.min(Math.max(score, 0), 100);

  const getTrustColor = (score: number) => {
    if (score >= 80) return "bg-primary";
    if (score >= 50) return "bg-yellow-400";
    return "bg-red-400";
  };

  const score = clampScore(trustScore!);

  const profileImageUrl =
    profileImage ||
    "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1600&auto=format&fit=crop";

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/profile/edit");
  };



  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8">
        <div className="flex flex-col sm:flex-row items-center sm:items-start md:items-center gap-6 md:gap-8 text-center sm:text-left">
          <div className="relative shrink-0">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-24 md:size-32 border-4 border-white shadow-xl ring-1 ring-slate-100"
              style={{
                backgroundImage: profileImage
                  ? `url(${API_URL}/uploads/users/profile/${profileImage})`
                  : `url(https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1600&auto=format&fit=crop)`,
              }}
            />

            {/* Verified badge */}
            <div className="absolute bottom-1 right-1 bg-primary text-white rounded-full p-1.5 border-2 border-white shadow-sm">
              <HiCheckBadge className="w-4 h-4" />
            </div>
          </div>

          <div className="flex flex-col">
            <h1 className="text-brand-orange text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight mb-1">
              {fullName}
            </h1>

            <p className="text-slate-400 text-sm md:text-base font-semibold">
              Member since {formattedMemberSince}{" "}
              <span className="text-primary">Premium Tier</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 mt-4">
              <div className="h-2.5 w-full sm:w-40 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ease-out ${getTrustColor(
                    score,
                  )}`}
                  style={{ width: `${score}%` }}
                />
              </div>
              <p className="text-primary text-sm font-extrabold whitespace-nowrap">
                <span
                  className={
                    score >= 80
                      ? "text-primary"
                      : score >= 50
                        ? "text-yellow-500"
                        : "text-red-500"
                  }
                >
                  {score}%
                </span>{" "}
                Trust Score
              </p>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-3 sm:gap-4 w-full md:w-auto">
          <button
            onClick={handleNavigation}
            className="flex-1 md:flex-none flex items-center justify-center gap-2 rounded-xl h-11 px-6 bg-white text-charcoal text-sm font-bold hover:bg-slate-50 transition-all border border-slate-200"
          >
            <HiOutlinePencilSquare className="w-5 h-5" />
            Edit Profile
          </button>

          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 rounded-xl h-11 px-6 bg-primary text-white text-sm font-bold hover:bg-[#00a383] transition-all shadow-lg shadow-primary/20">
            <HiOutlineShare className="w-5 h-5" />
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileHero;
