import React from "react";

interface ProfileHeroSkeletonProps {
  withShimmer?: boolean;
}

const ProfileHeroSkeleton: React.FC<ProfileHeroSkeletonProps> = ({
  withShimmer = false,
}) => {
  const skeletonClass = withShimmer
    ? "skeleton-shimmer bg-slate-200"
    : "bg-slate-200";

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm animate-pulse">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8">
        <div className="flex flex-col sm:flex-row items-center sm:items-start md:items-center gap-6 md:gap-8 text-center sm:text-left">
          <div className="relative shrink-0">
            {/* Avatar skeleton */}
            <div
              className={`rounded-full size-24 md:size-32 ${skeletonClass} border-4 border-white shadow-xl ring-1 ring-slate-100`}
            />
            {/* Verified badge skeleton */}
            <div
              className={`absolute bottom-1 right-1 ${skeletonClass} rounded-full size-7 border-2 border-white`}
            />
          </div>

          <div className="flex flex-col w-full sm:w-auto">
            {/* Name skeleton */}
            <div
              className={`h-8 md:h-10 lg:h-12 ${skeletonClass} rounded-lg w-48 mb-2`}
            />
            {/* Member info skeleton */}
            <div className={`h-5 ${skeletonClass} rounded w-64 mb-4`} />

            {/* Trust score skeleton */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div
                className={`h-2.5 w-full sm:w-40 ${skeletonClass} rounded-full`}
              />
              <div className={`h-5 ${skeletonClass} rounded w-28`} />
            </div>
          </div>
        </div>

        {/* Action buttons skeleton */}
        <div className="flex flex-wrap gap-3 sm:gap-4 w-full md:w-auto">
          <div
            className={`flex-1 md:flex-none h-11 ${skeletonClass} rounded-xl w-full md:w-36`}
          />
          <div
            className={`flex-1 md:flex-none h-11 ${skeletonClass} rounded-xl w-full md:w-28`}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileHeroSkeleton;
