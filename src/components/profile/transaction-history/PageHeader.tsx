import { FiFilter, FiDownload } from "react-icons/fi";
import { FiFileText } from "react-icons/fi";

export default function PageHeader() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 md:mb-8">
      <div className="flex items-center gap-3">
        <div className="bg-brand-orange p-2 rounded-lg text-white">
          <FiFileText />
        </div>

        <h1 className="text-slate-900 text-2xl md:text-3xl font-black leading-tight tracking-tight">
          Transaction History
        </h1>
      </div>

      <div className="flex gap-2">
        <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-white border border-slate-200 text-slate-700 text-sm font-bold hover:bg-slate-50 transition-all shadow-sm">
          <FiFilter size={18} />
          Filters
        </button>

        <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold hover:opacity-90 transition-all shadow-lg shadow-primary/20">
          <FiDownload size={18} />
          Export
        </button>
      </div>
    </div>
  );
}
