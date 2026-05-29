"use client";

import React from "react";

export default function EditProfileFormSkeleton() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8">
        {/* Header */}
        <div className="mb-10 text-center">
          <div className="h-9 w-56 bg-slate-200 rounded-xl mx-auto animate-pulse" />
          <div className="h-4 w-80 bg-slate-200 rounded mx-auto mt-3 animate-pulse" />
        </div>

        {/* Profile Image Section */}
        <div className="flex flex-col items-center mb-10">
          <div className="w-32 h-32 rounded-full bg-slate-200 animate-pulse border-4 border-white shadow-lg" />

          <div className="mt-4 h-11 w-40 bg-slate-200 rounded-2xl animate-pulse" />
        </div>

        {/* Form Fields */}
        <div className="space-y-8">
          {/* Full Name */}
          <div>
            <div className="h-4 w-24 bg-slate-200 rounded mb-2 animate-pulse" />
            <div className="h-14 bg-slate-100 rounded-2xl animate-pulse" />
          </div>

          {/* Email */}
          <div>
            <div className="h-4 w-28 bg-slate-200 rounded mb-2 animate-pulse" />
            <div className="h-14 bg-slate-100 rounded-2xl animate-pulse" />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 mt-12">
          <div className="h-12 w-28 bg-slate-200 rounded-2xl animate-pulse" />
          <div className="h-12 w-36 bg-slate-300 rounded-2xl animate-pulse" />
        </div>
      </div>
    </div>
  );
}
