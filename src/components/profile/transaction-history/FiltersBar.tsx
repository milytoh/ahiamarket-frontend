import { FiCalendar, FiChevronDown, FiInfo } from "react-icons/fi";

export default function FiltersBar() {
  return (
    <div className="flex flex-col gap-4 mb-6 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2 md:gap-3">
          <div className="flex items-center gap-2 bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-lg w-full sm:w-auto cursor-pointer hover:bg-slate-100">
            <FiCalendar className="text-slate-400" />
            <p className="text-slate-700 text-sm font-medium">
              Oct 1 - Oct 31, 2023
            </p>
            <FiChevronDown className="ml-auto text-slate-400" />
          </div>

          <div className="hidden sm:block h-6 w-[1px] bg-slate-200 mx-1"></div>

          <div className="flex flex-wrap gap-2 w-full sm:w-auto">
            <button className="flex-1 sm:flex-none flex items-center justify-center gap-x-2 rounded-lg bg-primary px-4 py-1.5 shadow-sm text-white text-sm font-bold">
              All Types
              <FiChevronDown />
            </button>

            <button className="flex-1 sm:flex-none rounded-lg bg-slate-50 border border-slate-100 px-4 py-1.5 hover:bg-slate-100 text-slate-600 text-sm font-medium">
              Deposits
            </button>

            <button className="flex-1 sm:flex-none rounded-lg bg-slate-50 border border-slate-100 px-4 py-1.5 hover:bg-slate-100 text-slate-600 text-sm font-medium">
              Withdrawals
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 text-slate-500 text-xs">
          <FiInfo size={16} />
          Showing 48 transactions
        </div>
      </div>
    </div>
  );
}
