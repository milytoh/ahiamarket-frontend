import React from "react";

export default function EditProductFormSkeleton() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-pulse">
      {/* Left Column - Main Content */}
      <div className="lg:col-span-8 space-y-8">
        {/* Foundation Details Section */}
        <section className="bg-white p-8 rounded-3xl border border-border-light">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1.5 h-6 bg-gray-200 rounded-full" />
            <div className="h-7 w-48 bg-gray-200 rounded-xl" />
          </div>

          <div className="space-y-6">
            {/* Product Name */}
            <div>
              <div className="h-3 w-24 bg-gray-200 rounded mb-2" />
              <div className="h-14 w-full bg-gray-100 rounded-2xl" />
            </div>

            {/* Category */}
            <div>
              <div className="h-3 w-20 bg-gray-200 rounded mb-2" />
              <div className="h-14 w-full bg-gray-100 rounded-2xl" />
            </div>

            {/* Condition */}
            <div>
              <div className="h-3 w-20 bg-gray-200 rounded mb-2" />
              <div className="h-14 w-full bg-gray-100 rounded-2xl" />
            </div>

            {/* Description */}
            <div>
              <div className="h-3 w-24 bg-gray-200 rounded mb-2" />
              <div className="h-40 w-full bg-gray-100 rounded-2xl" />
            </div>
          </div>
        </section>

        {/* Visual Assets / Image Upload Section */}
        <section className="bg-white p-8 rounded-3xl border border-border-light">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-6 bg-gray-200 rounded-full" />
              <div className="h-7 w-36 bg-gray-200 rounded-xl" />
            </div>
            <div className="h-6 w-32 bg-emerald-100 rounded-full" />
          </div>

          {/* Upload Area Skeleton */}
          <div className="border-2 border-dashed border-gray-200 rounded-3xl p-12 flex flex-col items-center justify-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full mb-4" />
            <div className="h-5 w-48 bg-gray-200 rounded mb-2" />
            <div className="h-3 w-64 bg-gray-100 rounded" />
          </div>

          {/* Image Previews Skeleton */}
          <div className="mt-6 grid grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="relative">
                <div className="w-full aspect-square bg-gray-100 rounded-2xl" />
                {i === 1 && (
                  <div className="absolute top-2 left-2 h-5 w-12 bg-gray-300 rounded" />
                )}
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Right Column - Market Logistics */}
      <div className="lg:col-span-4 space-y-8">
        <section className="bg-white p-8 rounded-3xl border border-border-light">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1.5 h-6 bg-emerald-100 rounded-full" />
            <div className="h-7 w-40 bg-gray-200 rounded-xl" />
          </div>

          <div className="space-y-8">
            {/* Unit Price */}
            <div>
              <div className="h-3 w-28 bg-gray-200 rounded mb-2" />
              <div className="h-16 w-full bg-gray-100 rounded-2xl" />
            </div>

            {/* Stock */}
            <div>
              <div className="h-3 w-28 bg-gray-200 rounded mb-2" />
              <div className="h-14 w-full bg-gray-100 rounded-2xl" />
            </div>

            {/* Pay on Delivery Toggle */}
            <div className="pt-6 border-t flex items-center justify-between">
              <div className="space-y-2">
                <div className="h-5 w-36 bg-gray-200 rounded" />
                <div className="h-3 w-52 bg-gray-100 rounded" />
              </div>
              <div className="w-12 h-6 bg-gray-200 rounded-full" />
            </div>
          </div>
        </section>

        {/* Action Buttons */}
        <div className="flex flex-col gap-4 pt-6">
          <div className="h-16 w-full bg-gray-200 rounded-2xl" />
          <div className="h-14 w-full bg-gray-100 rounded-2xl" />
        </div>
      </div>
    </div>
  );
}
