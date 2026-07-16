import React from "react";
import { MdArrowBack } from "react-icons/md";

export default function OrderHeaderSkeleton() {
  return (
    <div className="bg-white rounded-3xl border border-[#bbcac1] shadow-sm p-6 animate-pulse">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        {/* Left Side */}
        <div className="flex-1">
          {/* Back Button */}
          <div className="inline-flex items-center gap-2">
            <MdArrowBack size={22} className="text-slate-300" />
            <div className="h-5 w-36 bg-slate-200 rounded"></div>
          </div>

          {/* Order Number */}
          <div className="mt-4 h-9 w-64 bg-slate-200 rounded-xl"></div>

          {/* Parent & Date Info */}
          <div className="mt-3 flex flex-wrap items-center gap-5">
            <div className="h-5 w-40 bg-slate-200 rounded"></div>
            <div className="h-5 w-48 bg-slate-200 rounded"></div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Status Badge Skeleton */}
          <div className="h-8 w-28 bg-slate-200 rounded-full"></div>

          {/* Print Button Skeleton */}
          <div className="h-11 w-28 bg-slate-200 rounded-xl"></div>

          {/* Invoice Button Skeleton */}
          <div className="h-11 w-32 bg-[#05b384]/30 rounded-xl"></div>
        </div>
      </div>
    </div>
  );
}
