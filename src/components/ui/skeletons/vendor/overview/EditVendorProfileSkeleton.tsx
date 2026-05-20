"use client";

import React from "react";

export default function EditVendorProfileSkeleton() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-10">
      <div className="space-y-10">
        {/* Header Section with Cover + Logo */}
        <section className="bg-white rounded-3xl overflow-hidden border border-border-light shadow-sm">
          {/* Cover Image Skeleton */}
          <div className="relative h-64 bg-slate-200 animate-pulse">
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />
          </div>

          {/* Logo + Info Area */}
          <div className="px-6 md:px-10 pb-10 flex flex-col md:flex-row gap-6 items-end -mt-16 relative">
            {/* Logo Skeleton */}
            <div className="relative">
              <div className="w-36 h-36 rounded-3xl bg-slate-200 border-4 border-white animate-pulse" />
              <div className="absolute bottom-2 right-2 w-10 h-10 bg-slate-300 rounded-2xl animate-pulse" />
            </div>

            {/* Title & Subtitle */}
            <div className="pb-3 flex-1 space-y-3">
              <div className="h-10 bg-slate-200 rounded-xl w-80 animate-pulse" />
              <div className="h-4 bg-slate-200 rounded w-96 animate-pulse" />
            </div>
          </div>
        </section>

        {/* Business Information Section */}
        <section className="bg-white rounded-3xl border border-border-light p-6 md:p-10 shadow-sm">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-1.5 h-7 bg-slate-200 rounded-full animate-pulse" />
            <div className="h-7 w-64 bg-slate-200 rounded animate-pulse" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {/* Username */}
            <div>
              <div className="h-4 w-24 bg-slate-200 rounded mb-2 animate-pulse" />
              <div className="h-12 bg-slate-100 rounded-2xl animate-pulse" />
            </div>

            {/* Store Name */}
            <div>
              <div className="h-4 w-28 bg-slate-200 rounded mb-2 animate-pulse" />
              <div className="h-12 bg-slate-100 rounded-2xl animate-pulse" />
            </div>

            {/* Category */}
            <div>
              <div className="h-4 w-20 bg-slate-200 rounded mb-2 animate-pulse" />
              <div className="h-12 bg-slate-100 rounded-2xl animate-pulse" />
            </div>

            {/* Phone */}
            <div>
              <div className="h-4 w-16 bg-slate-200 rounded mb-2 animate-pulse" />
              <div className="h-12 bg-slate-100 rounded-2xl animate-pulse" />
            </div>

            {/* Email - Full Width */}
            <div className="md:col-span-2">
              <div className="h-4 w-20 bg-slate-200 rounded mb-2 animate-pulse" />
              <div className="h-12 bg-slate-100 rounded-2xl animate-pulse" />
            </div>

            {/* Bio */}
            <div className="md:col-span-2">
              <div className="h-4 w-16 bg-slate-200 rounded mb-2 animate-pulse" />
              <div className="h-32 bg-slate-100 rounded-2xl animate-pulse" />
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="bg-white rounded-3xl border border-border-light p-6 md:p-10 shadow-sm">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-1.5 h-7 bg-slate-200 rounded-full animate-pulse" />
            <div className="h-7 w-40 bg-slate-200 rounded animate-pulse" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {[1, 2, 3].map((i) => (
              <div key={i}>
                <div className="h-4 w-20 bg-slate-200 rounded mb-2 animate-pulse" />
                <div className="h-12 bg-slate-100 rounded-2xl animate-pulse" />
              </div>
            ))}
          </div>
        </section>

        {/* Action Buttons */}
        <div className="sticky bottom-0 bg-white/80 backdrop-blur-md border border-border-light rounded-3xl p-5 shadow-lg flex flex-col sm:flex-row justify-end gap-4">
          <div className="h-12 w-32 bg-slate-200 rounded-2xl animate-pulse" />
          <div className="h-12 w-40 bg-slate-300 rounded-2xl animate-pulse" />
        </div>
      </div>
    </div>
  );
}
