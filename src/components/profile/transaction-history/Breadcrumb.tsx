// components/wallet/FilterControls.tsx
import { MdCalendarToday, MdExpandMore, MdInfoOutline } from "react-icons/md";

export default function FilterControls() {
  return (
    <div className="flex flex-col gap-4 mb-6 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2 md:gap-3">
          {/* Date picker dropdown */}
          <div className="flex items-center gap-2 bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-lg w-full sm:w-auto cursor-pointer hover:bg-slate-100 transition-colors">
            <MdCalendarToday className="text-slate-400 text-[18px]" />
            <p className="text-slate-700 text-sm font-medium">
              Oct 1 - Oct 31, 2023
            </p>
            <MdExpandMore className="text-slate-400 text-[18px] ml-auto" />
          </div>
          <div className="hidden sm:block h-6 w-[1px] bg-slate-200 mx-1" />
          {/* Type filters */}
          <div className="flex flex-wrap gap-2 w-full sm:w-auto">
            <button className="flex-1 sm:flex-none flex items-center justify-center gap-x-2 rounded-lg bg-primary px-4 py-1.5 shadow-sm text-white text-sm font-bold">
              <span>All Types</span>
              <MdExpandMore className="text-white text-[18px]" />
            </button>
            <button className="flex-1 sm:flex-none flex items-center justify-center gap-x-2 rounded-lg bg-slate-50 border border-slate-100 px-4 py-1.5 hover:bg-slate-100 transition-colors text-slate-600 text-sm font-medium">
              Deposits
            </button>
            <button className="flex-1 sm:flex-none flex items-center justify-center gap-x-2 rounded-lg bg-slate-50 border border-slate-100 px-4 py-1.5 hover:bg-slate-100 transition-colors text-slate-600 text-sm font-medium">
              Withdrawals
            </button>
          </div>
        </div>
        <div className="flex items-center gap-2 text-slate-500 text-xs ml-auto lg:ml-0">
          <MdInfoOutline className="text-[16px]" />
          <span>Showing 48 transactions</span>
        </div>
      </div>
    </div>
  );
}
