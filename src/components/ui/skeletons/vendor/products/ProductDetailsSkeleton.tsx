"use client";

import React from "react";

export default function ProductDetailsSkeleton() {
  return (
    <div className="min-h-screen bg-background-light p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header Skeleton */}
        <div className="bg-white rounded-3xl border border-border-light p-6 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
            <div className="space-y-3 w-full lg:w-2/3">
              <div className="flex items-center gap-3">
                <div className="h-6 w-20 bg-slate-200 rounded-full animate-pulse" />
                <div className="h-6 w-24 bg-slate-200 rounded-full animate-pulse" />
              </div>
              <div className="h-10 bg-slate-200 rounded-xl w-3/4 animate-pulse" />
              <div className="h-4 bg-slate-200 rounded w-1/2 animate-pulse" />
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="h-12 w-36 bg-slate-200 rounded-2xl animate-pulse" />
              <div className="h-12 w-24 bg-slate-200 rounded-2xl animate-pulse" />
              <div className="h-12 w-24 bg-slate-200 rounded-2xl animate-pulse" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
          {/* LEFT SIDE - Images + Description */}
          <div className="xl:col-span-8 space-y-6">
            {/* Image Gallery Skeleton */}
            <div className="bg-white rounded-3xl border border-border-light p-4 md:p-6 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {/* Main Image */}
                <div className="md:col-span-3">
                  <div className="w-full h-[320px] md:h-[500px] bg-slate-200 rounded-3xl animate-pulse" />
                </div>

                {/* Side Images */}
                <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-1 gap-4">
                  {[1, 2].map((i) => (
                    <div key={i} className="h-[150px] bg-slate-200 rounded-3xl animate-pulse" />
                  ))}
                </div>
              </div>
            </div>

            {/* Description Section */}
            <div className="bg-white rounded-3xl border border-border-light p-6 md:p-8 shadow-sm">
              <div className="h-7 w-48 bg-slate-200 rounded animate-pulse mb-6" />
              <div className="space-y-3">
                <div className="h-4 bg-slate-200 rounded w-full animate-pulse" />
                <div className="h-4 bg-slate-200 rounded w-full animate-pulse" />
                <div className="h-4 bg-slate-200 rounded w-4/5 animate-pulse" />
                <div className="h-4 bg-slate-200 rounded w-full animate-pulse" />
                <div className="h-4 bg-slate-200 rounded w-3/4 animate-pulse" />
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="h-24 bg-slate-100 rounded-2xl animate-pulse" />
                <div className="h-24 bg-slate-100 rounded-2xl animate-pulse" />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Sidebar */}
          <div className="xl:col-span-4 space-y-6">
            {/* Price Card */}
            <div className="bg-white rounded-3xl border border-border-light p-6 shadow-sm">
              <div className="h-4 w-24 bg-slate-200 rounded animate-pulse mb-3" />
              <div className="h-12 w-48 bg-slate-200 rounded-xl animate-pulse mb-6" />
              <div className="h-3 w-full bg-slate-200 rounded-full animate-pulse" />
              <div className="flex justify-between mt-4">
                <div className="h-4 w-16 bg-slate-200 rounded animate-pulse" />
                <div className="h-4 w-12 bg-slate-200 rounded animate-pulse" />
              </div>
            </div>

            {/* Toggles */}
            <div className="bg-white rounded-3xl border border-border-light p-6 shadow-sm space-y-6">
              <div className="flex justify-between items-center">
                <div className="space-y-2 w-2/3">
                  <div className="h-5 w-32 bg-slate-200 rounded animate-pulse" />
                  <div className="h-4 w-40 bg-slate-200 rounded animate-pulse" />
                </div>
                <div className="h-6 w-12 bg-slate-200 rounded-full animate-pulse" />
              </div>

              <div className="flex justify-between items-center">
                <div className="space-y-2 w-2/3">
                  <div className="h-5 w-32 bg-slate-200 rounded animate-pulse" />
                  <div className="h-4 w-40 bg-slate-200 rounded animate-pulse" />
                </div>
                <div className="h-6 w-12 bg-slate-200 rounded-full animate-pulse" />
              </div>
            </div>

            {/* Analytics Cards */}
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-3xl border border-border-light p-6 shadow-sm">
                  <div className="h-4 w-24 bg-slate-200 rounded animate-pulse mb-4" />
                  <div className="h-10 w-32 bg-slate-200 rounded-xl animate-pulse" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}