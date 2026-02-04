import React from "react";

const HeaderSkeleton: React.FC = () => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-slate-100 bg-white px-4 md:px-8 py-4 sticky top-0 z-50 shadow-sm animate-pulse">
      <div className="flex items-center gap-4 lg:gap-12">
        <div className="flex items-center gap-3">
          {/* Mobile menu button skeleton */}
          <div className="lg:hidden size-6 bg-slate-200 rounded" />

          {/* Logo skeleton */}
          <div className="size-9 bg-slate-200 rounded shrink-0" />

          {/* Brand name skeleton */}
          <div className="h-6 w-32 bg-slate-200 rounded hidden sm:block" />
        </div>

        {/* Search bar skeleton */}
        <div className="hidden md:flex items-center w-full max-w-md h-11">
          <div className="flex w-full items-stretch rounded-xl h-full bg-slate-100 border border-slate-200">
            <div className="flex items-center justify-center pl-4">
              <div className="size-5 bg-slate-200 rounded" />
            </div>
            <div className="flex-1 px-4">
              <div className="h-4 bg-slate-200 rounded w-48 mt-3" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 lg:gap-6">
        {/* Top nav links skeleton (desktop) */}
        <nav className="hidden xl:flex items-center gap-6">
          <div className="h-4 w-20 bg-slate-200 rounded" />
          <div className="h-4 w-16 bg-slate-200 rounded" />
          <div className="h-4 w-20 bg-slate-200 rounded" />
        </nav>

        {/* Icon buttons skeleton */}
        <div className="flex gap-2 sm:gap-3 md:border-l border-slate-100 md:pl-6">
          <div className="size-10 bg-slate-200 rounded-xl" />
          <div className="size-10 bg-slate-200 rounded-xl" />
        </div>

        {/* Avatar skeleton */}
        <div className="size-10 bg-slate-200 rounded-full border-2 border-slate-100 shrink-0" />
      </div>
    </header>
  );
};

export default HeaderSkeleton;
