import React from "react";
import { MdPerson } from "react-icons/md";

export default function CustomerCardSkeleton() {
  return (
    <div className="bg-white rounded-3xl border border-[#bbcac1] shadow-sm p-6 animate-pulse">
      {/* Header Section */}
      <div className="flex items-center gap-3 mb-6">
        {/* Profile Image Skeleton */}
        <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center overflow-hidden">
          <MdPerson className="text-3xl text-slate-300" />
        </div>

        <div className="space-y-2">
          <div className="h-5 w-28 bg-slate-200 rounded"></div>
          <div className="h-4 w-36 bg-slate-200 rounded"></div>
        </div>
      </div>

      {/* Details Section */}
      <div className="space-y-5">
        {/* Name Row */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 text-[#6c7a72]">
            <MdPerson className="text-xl text-slate-300" />
            <div className="h-4 w-12 bg-slate-200 rounded"></div>
          </div>
          <div className="h-5 w-40 bg-slate-200 rounded"></div>
        </div>

        {/* Email Row */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 text-[#6c7a72]">
            <div className="w-5 h-5 bg-slate-200 rounded"></div>
            <div className="h-4 w-12 bg-slate-200 rounded"></div>
          </div>
          <div className="h-5 w-52 bg-slate-200 rounded"></div>
        </div>

        {/* Phone Row */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 text-[#6c7a72]">
            <div className="w-5 h-5 bg-slate-200 rounded"></div>
            <div className="h-4 w-12 bg-slate-200 rounded"></div>
          </div>
          <div className="h-5 w-32 bg-slate-200 rounded"></div>
        </div>

        {/* Buyer Status Row */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 text-[#6c7a72]">
            <div className="w-5 h-5 bg-slate-200 rounded"></div>
            <div className="h-4 w-12 bg-slate-200 rounded"></div>
          </div>
          <div className="h-5 w-36 bg-emerald-100 rounded"></div>
        </div>
      </div>
    </div>
  );
}
