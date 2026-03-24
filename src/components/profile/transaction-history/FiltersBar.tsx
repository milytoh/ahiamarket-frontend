

import { useState } from "react";
import { FiCalendar, FiInfo } from "react-icons/fi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export type TransactionType = "all" | "deposit" | "withdrawal" | "purchase";

export interface TransactionFilters {
  startDate?: Date | null;
  endDate?: Date | null;
  type: TransactionType;
  search?: string;
}

type Props = {
  onChange: (filters: TransactionFilters) => void;
  total: number;
};

export default function FiltersBar({ onChange, total }: Props) {
  const [filters, setFilters] = useState<TransactionFilters>({
    startDate: null,
    endDate: null,
    type: "all",
  });

  const updateFilters = (newFilters: Partial<TransactionFilters>) => {
    const updated = { ...filters, ...newFilters };
    setFilters(updated);
    onChange(updated);
  };

  return (
    <div className="flex flex-col gap-4 mb-6 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        {/* LEFT SIDE */}
        <div className="flex flex-wrap items-center gap-3">
          {/* FROM DATE */}
          <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg">
            <FiCalendar  className="text-brand-orange" />

            <DatePicker
              selected={filters.startDate}
              onChange={(date: Date | null) =>
                updateFilters({ startDate: date })
              }
              placeholderText="From date"
              maxDate={filters.endDate || new Date()}
              dateFormat="MMM d, yyyy"
              className="bg-transparent text-sm outline-none w-[120px]"
            />
          </div>

          {/* TO DATE */}
          <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg">
            <FiCalendar className="text-brand-orange" />

            <DatePicker
              selected={filters.endDate}
              onChange={(date: Date | null) => updateFilters({ endDate: date })}
              placeholderText="To date"
              dateFormat="MMM d, yyyy"
              minDate={filters.startDate || undefined}
              maxDate={
                filters.startDate
                  ? new Date(
                      filters.startDate.getFullYear(),
                      filters.startDate.getMonth() + 6,
                      filters.startDate.getDate(),
                    )
                  : new Date()
              }
              className="bg-transparent text-sm outline-none w-[120px]"
            />
          </div>

          <div className="hidden sm:block h-6 w-[1px] bg-slate-200 mx-1"></div>

          {/* TYPE FILTER */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => updateFilters({ type: "all" })}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium ${
                filters.type === "all"
                  ? "bg-primary text-white"
                  : "bg-slate-50 border border-slate-200 text-slate-600 hover:bg-slate-100"
              }`}
            >
              All
            </button>

            <button
              onClick={() => updateFilters({ type: "deposit" })}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium ${
                filters.type === "deposit"
                  ? "bg-primary text-white"
                  : "bg-slate-50 border border-slate-200 text-slate-600 hover:bg-slate-100"
              }`}
            >
              Deposits
            </button>

            <button
              onClick={() => updateFilters({ type: "withdrawal" })}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium ${
                filters.type === "withdrawal"
                  ? "bg-primary text-white"
                  : "bg-slate-50 border border-slate-200 text-slate-600 hover:bg-slate-100"
              }`}
            >
              Withdrawals
            </button>

            <button
              onClick={() => updateFilters({ type: "purchase" })}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium ${
                filters.type === "purchase"
                  ? "bg-primary text-white"
                  : "bg-slate-50 border border-slate-200 text-slate-600 hover:bg-slate-100"
              }`}
            >
              Purchases
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-2 text-slate-500 text-xs">
          <FiInfo size={16} />
          Showing {total} transactions
        </div>
      </div>
    </div>
  );
}