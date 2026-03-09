import { FiChevronRight } from "react-icons/fi";

export default function Breadcrumb() {
  return (
    <div className="flex items-center gap-2 mb-4 md:mb-6 overflow-x-auto whitespace-nowrap">
      <a className="text-slate-500 text-xs md:text-sm font-medium hover:text-primary">
        Home
      </a>

      <FiChevronRight className="text-slate-400 text-[16px]" />

      <a className="text-slate-500 text-xs md:text-sm font-medium hover:text-primary">
        Wallet
      </a>

      <FiChevronRight className="text-slate-400 text-[16px]" />

      <span className="text-slate-900 text-xs md:text-sm font-bold">
        Transaction History
      </span>
    </div>
  );
}
