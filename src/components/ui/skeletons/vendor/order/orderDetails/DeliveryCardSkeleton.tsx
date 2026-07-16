import React from "react";
import { MdLocalShipping } from "react-icons/md";

export default function DeliveryCardSkeleton() {
  return (
    <div className="bg-white rounded-3xl border border-[#bbcac1] shadow-sm p-6 animate-pulse">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-full bg-[#05b384]/10 flex items-center justify-center">
          <MdLocalShipping className="text-3xl text-slate-300" />
        </div>

        <div className="space-y-2">
          <div className="h-6 w-28 bg-slate-200 rounded"></div>
          <div className="h-4 w-40 bg-slate-200 rounded"></div>
        </div>
      </div>

      {/* Details */}
      <div className="space-y-5">
        {/* Status Row */}
        <div className="flex justify-between items-center">
          <div className="h-5 w-16 bg-slate-200 rounded"></div>
          <div className="h-7 w-28 bg-slate-200 rounded-full"></div>
        </div>

        {/* Address Row */}
        <div className="flex justify-between items-start gap-5">
          <div className="flex items-center gap-2 text-[#6c7a72]">
            <div className="w-5 h-5 bg-slate-200 rounded"></div>
            <div className="h-5 w-16 bg-slate-200 rounded"></div>
          </div>
          <div className="h-5 w-52 bg-slate-200 rounded text-right"></div>
        </div>

        {/* Tracking Row */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 text-[#6c7a72]">
            <div className="w-5 h-5 bg-slate-200 rounded"></div>
            <div className="h-5 w-20 bg-slate-200 rounded"></div>
          </div>
          <div className="h-5 w-36 bg-slate-200 rounded"></div>
        </div>

        {/* Estimated Date Row */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 text-[#6c7a72]">
            <div className="w-5 h-5 bg-slate-200 rounded"></div>
            <div className="h-5 w-24 bg-slate-200 rounded"></div>
          </div>
          <div className="h-5 w-28 bg-slate-200 rounded"></div>
        </div>
      </div>
    </div>
  );
}
