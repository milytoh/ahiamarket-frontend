import React from "react";
import { UserProfile } from "@/pages/profile/Profile";

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

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8">
        <div className="flex flex-col sm:flex-row items-center sm:items-start md:items-center gap-6 md:gap-8 text-center sm:text-left">
          <div className="relative shrink-0">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-24 md:size-32 border-4 border-white shadow-xl ring-1 ring-slate-100"
              style={{
                backgroundImage: `url(https://lh3.googleusercontent.com/aida-public/AB6AXuDvFzdyxJox8FB7S4YntVEkfXz80VxSzKN54SyR88zhAX9QzYvqX04TYK96viHFGI3s-YnzDI6qMo_jXZR8zU595_-4j6R4w1e2-RwVq4Z3InlBp2mkAyNNiFppT1rIpeh96LM2YNniyCNwh0gOmS5TjeAbVh3PuDAID0UzcloCyzF71HVy22HJ7SRl1FY-TthWjBgFfU8Ardkhht_LTO6aMe9BZkjWbSTsCsJcEB0rIDy0J7XqFsgbdcB70IMQ5wqLErjid-b5Pvmk)`,
              }}
            />

            {/* Verified badge */}
            <div className="absolute bottom-1 right-1 bg-primary text-white rounded-full p-1.5 border-2 border-white shadow-sm">
              <HiCheckBadge className="w-4 h-4" />
            </div>
          </div>

          <div className="flex flex-col">
            <h1 className="text-charcoal text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight mb-1">
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
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 rounded-xl h-11 px-6 bg-white text-charcoal text-sm font-bold hover:bg-slate-50 transition-all border border-slate-200">
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
