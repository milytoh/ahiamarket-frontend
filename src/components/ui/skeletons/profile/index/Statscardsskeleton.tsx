import React from "react";

const StatsCardsSkeleton: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {[1, 2, 3].map((index) => (
        <div
          key={index}
          className={`bg-white p-6 md:p-7 rounded-2xl border border-slate-100 shadow-sm animate-pulse ${
            index === 3 ? "sm:col-span-2 lg:col-span-1" : ""
          }`}
        >
          <div className="flex justify-between items-start mb-4">
            {/* Label skeleton */}
            <div className="h-3 bg-slate-200 rounded w-20" />
            {/* Icon skeleton */}
            <div className="size-9 bg-slate-200 rounded-lg" />
          </div>

          {/* Value skeleton */}
          <div className="h-8 md:h-9 bg-slate-200 rounded-lg w-24 mb-2" />

          {/* Trend/subtitle skeleton */}
          <div className="h-3 bg-slate-200 rounded w-28" />
        </div>
      ))}
    </div>
  );
};

export default StatsCardsSkeleton;
