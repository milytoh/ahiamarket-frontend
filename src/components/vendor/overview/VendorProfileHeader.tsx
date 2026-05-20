"use client";

import { useNavigate } from "react-router-dom";
import React from "react";
import {
  MdLocationOn,
  MdCategory,
  MdStar,
  MdEdit,
  MdVerified,
} from "react-icons/md";
interface VendorProfileHeaderProps {
 
  vendor: {
    _id: string;
    store_name: string;
    logo_url: string;
    category: string;
    cover_url: string;
    avatar_img: string;
    location?: {
      city?: string;
      state?: string;
      country?: string;
    };
    verificationStatus?: "pending" | "verified" | "rejected";
  };
  rating?: number;
  reviewCount?: number;
}

export default function VendorProfileHeader({
  vendor,
  rating = 4.2,
  reviewCount = 128,
}: VendorProfileHeaderProps) {
 const navigate = useNavigate();

  const storeName = vendor?.store_name;
  const city = vendor?.location?.city;
  const state = vendor?.location?.state;
  const isVerified = vendor?.verificationStatus;
  const category = vendor?.category;
  const coverImgUrl = vendor?.cover_url || vendor?.avatar_img;
  const handleVendorProfileEdit = () => {
    navigate(`/vendor/dashboard/profile/edit/${vendor._id}`);
  };

  return (
    <section className="relative rounded-3xl overflow-hidden bg-white shadow-sm border border-border-light">
      {/* Cover Photo */}
      <div
        className="h-52 w-full bg-cover bg-center"
        style={{
          backgroundImage: `url('${coverImgUrl}')`,
        }}
      />

      <div className="px-6 md:px-8 pb-8 flex flex-col md:flex-row items-end -mt-12 gap-6 relative">
        {/* Profile Picture */}
        <div className="relative">
          <img
            src={
              vendor?.logo_url ||
              "https://lh3.googleusercontent.com/aida-public/AB6AXuCZ3deY2Hqh8qBkrhjSCIckY8zRDYoG-7bP691haOLoONjO_Gyi_H_IP7LXejheIHWKZrh_RowutO-EfhalaqSXtFqE-_nvLyWtkvHeZXUVPUJy6MXb0yM035t2S6a0mnLXfMLds7DpMaxr1xB4PiX3E0Ng69l8Sma_9RWSTnU-xlQmX99GbKK1KrCqAzojIXaLZdwjbyEjdBSIFZu1okHXfQpgqhUFBZV15VY34AzxNlU9vc7z2f1kgaQu7kPN_tiM9279MNAu66nS"
            }
            alt={storeName}
            className="w-32 h-32 rounded-2xl border-4 border-white object-cover shadow-xl"
          />
          {isVerified && (
            <div className="absolute bottom-3 right-3 bg-[#05b384] text-white p-1.5 rounded-full border-2 border-white">
              <MdVerified size={20} />
            </div>
          )}
        </div>

        {/* Business Info */}
        <div className="flex-1 pb-2">
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-3xl font-extrabold tracking-tight text-text-main">
              {storeName}
            </h2>
            <button 
              className="flex items-center gap-2 text-sm font-bold text-[#05b384] hover:text-brand-green transition-colors"
              onClick={handleVendorProfileEdit}
            >
              <MdEdit size={18} /> Edit Profile
            </button>
          </div>

          <div className="flex items-center gap-4 text-sm text-slate-600">
            <div className="flex items-center gap-1">
              <MdLocationOn className="text-[#05b384]" />
              {city}, {state}
            </div>
            <div className="w-1 h-1 bg-slate-300 rounded-full" />
            <div className="flex items-center gap-1">
              <MdCategory className="text-[#05b384]" />
              {category}
            </div>
          </div>

          <div className="flex items-center gap-2 mt-3">
            <div className="flex items-center gap-1 text-amber-500 font-bold">
              <MdStar size={20} />
              <span>{rating}</span>
            </div>
            <span className="text-slate-500">({reviewCount} reviews)</span>
          </div>
        </div>

        {/* Follow Button */}
        <div className="pb-3">
          <button className="bg-[#05b384]/10 text-[#05b384] font-bold px-8 py-3 rounded-2xl hover:bg-[#05b384]/20 transition-all">
            Follow
          </button>
        </div>
      </div>
    </section>
  );
}
