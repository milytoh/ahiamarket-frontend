import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Pagination() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4 bg-slate-50 border-t border-slate-200">
      <p className="text-xs font-medium text-slate-500">
        Showing <span className="font-bold text-slate-900">1</span> to{" "}
        <span className="font-bold text-slate-900">5</span> of{" "}
        <span className="font-bold text-slate-900">48</span> transactions
      </p>

      <div className="flex gap-1">
        <button className="flex items-center justify-center size-8 rounded border border-slate-200 text-slate-400 bg-white hover:bg-slate-50">
          <FiChevronLeft />
        </button>

        <button className="flex items-center justify-center size-8 rounded bg-primary text-white font-bold text-xs">
          1
        </button>

        <button className="flex items-center justify-center size-8 rounded border border-slate-200 text-slate-600 bg-white hover:bg-slate-50 text-xs">
          2
        </button>

        <button className="flex items-center justify-center size-8 rounded border border-slate-200 text-slate-600 bg-white hover:bg-slate-50 text-xs">
          3
        </button>

        <button className="flex items-center justify-center size-8 rounded border border-slate-200 text-slate-400 bg-white hover:bg-slate-50">
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
}
