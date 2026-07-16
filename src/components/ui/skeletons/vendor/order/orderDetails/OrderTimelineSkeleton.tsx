import React from "react";

export default function OrderTimelineSkeleton() {
  return (
    <div className="bg-white rounded-3xl border border-[#bbcac1] shadow-sm animate-pulse">
      {/* Header */}
      <div className="px-6 py-5 border-b border-[#bbcac1]">
        <div className="h-7 w-40 bg-slate-200 rounded-xl"></div>
        <div className="h-4 w-56 bg-slate-200 rounded mt-2"></div>
      </div>

      {/* Timeline Content */}
      <div className="p-8 space-y-8">
        {Array.from({ length: 7 }).map((_, index) => (
          <div key={index} className="flex gap-4">
            {/* Timeline Dot + Line */}
            <div className="flex flex-col items-center">
              <div className="w-[26px] h-[26px] bg-slate-200 rounded-full"></div>
              {index !== 6 && (
                <div className="w-[2px] flex-1 bg-slate-200 my-2"></div>
              )}
            </div>

            {/* Step Content */}
            <div className="flex-1 pb-8">
              <div className="h-6 w-48 bg-slate-200 rounded"></div>
              <div className="h-4 w-32 bg-slate-200 rounded mt-2"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
