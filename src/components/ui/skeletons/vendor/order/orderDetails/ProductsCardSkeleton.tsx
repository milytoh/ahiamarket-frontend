import React from "react";

export default function ProductsCardSkeleton() {
  return (
    <div className="bg-white rounded-3xl border border-[#bbcac1] shadow-sm animate-pulse">
      {/* Header */}
      <div className="px-6 py-5 border-b border-[#bbcac1] flex justify-between items-center">
        <div>
          <div className="h-7 w-32 bg-slate-200 rounded-xl"></div>
          <div className="h-4 w-24 bg-slate-200 rounded mt-1"></div>
        </div>
      </div>

      {/* Products List */}
      <div>
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className={`p-6 flex flex-col md:flex-row gap-5 ${
              index !== 2 ? "border-b border-[#bbcac1]" : ""
            }`}
          >
            {/* Product Image Skeleton */}
            <div className="w-28 h-28 rounded-2xl bg-slate-200 flex-shrink-0"></div>

            {/* Product Info Skeleton */}
            <div className="flex-1 space-y-4">
              {/* Title */}
              <div className="h-6 w-3/4 bg-slate-200 rounded"></div>

              {/* Details Grid */}
              <div className="grid sm:grid-cols-3 gap-4">
                {/* Quantity */}
                <div>
                  <div className="h-3 w-16 bg-slate-200 rounded mb-2"></div>
                  <div className="h-6 w-12 bg-slate-200 rounded"></div>
                </div>

                {/* Unit Price */}
                <div>
                  <div className="h-3 w-20 bg-slate-200 rounded mb-2"></div>
                  <div className="h-6 w-28 bg-slate-200 rounded"></div>
                </div>

                {/* Subtotal */}
                <div>
                  <div className="h-3 w-16 bg-slate-200 rounded mb-2"></div>
                  <div className="h-7 w-36 bg-slate-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
