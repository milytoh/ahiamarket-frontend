"use client";

import React from "react";

export default function VendorProfileHeaderSkeleton() {
  return (
    <section className="relative rounded-3xl overflow-hidden bg-white shadow-sm border border-border-light animate-pulse">
      {/* Cover Photo Skeleton */}
      <div className="h-52 w-full bg-slate-200" />

      <div className="px-6 md:px-8 pb-8 flex flex-col md:flex-row items-end -mt-12 gap-6 relative">
        {/* Profile Picture Skeleton */}
        <div className="relative">
          <div className="w-32 h-32 rounded-2xl border-4 border-white bg-slate-200 shadow-xl" />

          {/* Verified Badge Skeleton */}
          <div className="absolute bottom-3 right-3 w-8 h-8 bg-slate-200 rounded-full border-2 border-white" />
        </div>

        {/* Business Info Skeleton */}
        <div className="flex-1 pb-2 w-full">
          <div className="flex items-center gap-3 mb-3">
            {/* Store Name Skeleton */}
            <div className="h-9 w-80 bg-slate-200 rounded-xl"></div>

            {/* Edit Button Skeleton */}
            <div className="h-8 w-32 bg-slate-200 rounded-xl"></div>
          </div>

          {/* Location & Category Skeleton */}
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-slate-200 rounded-full"></div>
              <div className="h-5 w-48 bg-slate-200 rounded"></div>
            </div>
            <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-slate-200 rounded-full"></div>
              <div className="h-5 w-40 bg-slate-200 rounded"></div>
            </div>
          </div>

          {/* Rating Skeleton */}
          <div className="flex items-center gap-3 mt-4">
            <div className="flex items-center gap-1">
              <div className="w-6 h-6 bg-slate-200 rounded"></div>
              <div className="h-6 w-12 bg-slate-200 rounded"></div>
            </div>
            <div className="h-5 w-28 bg-slate-200 rounded"></div>
          </div>
        </div>

        {/* Follow Button Skeleton */}
        <div className="pb-3">
          <div className="h-12 w-36 bg-slate-200 rounded-2xl"></div>
        </div>
      </div>
    </section>
  );
}
