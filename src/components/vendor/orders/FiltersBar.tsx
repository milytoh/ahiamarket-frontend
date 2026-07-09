import "react-datepicker/dist/react-datepicker.css";

import React from "react";
import DatePicker from "react-datepicker";
import { MdPersonSearch, MdRestartAlt } from "react-icons/md";

export interface OrderFilters {
  search: string;
  orderStatus: string;
  paymentStatus: string;
  startDate: Date | null;
  endDate: Date | null;
}

interface FiltersBarProps {
  filters: OrderFilters;
  onChange: React.Dispatch<React.SetStateAction<OrderFilters>>;
}

const FiltersBar: React.FC<FiltersBarProps> = ({ filters, onChange }) => {
  return (
    <div className="p-5 border-b border-[#bbcac1] bg-[#f8f9ff] space-y-4">
      {/* Top Row */}
      <div className="flex flex-col xl:flex-row gap-4 justify-between">
        {/* Search */}
        <div className="relative w-full xl:max-w-sm">
          <MdPersonSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6c7a72] text-xl" />

          <input
            value={filters.search}
            onChange={(e) =>
              onChange((prev) => ({
                ...prev,
                search: e.target.value,
              }))
            }
            placeholder="Search customer or order..."
            className="pl-10 pr-4 py-2.5 w-full border border-[#bbcac1] rounded-xl bg-white text-sm focus:ring-2 focus:ring-[#006c4e] focus:border-[#006c4e] outline-none"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3">
          {/* Order Status */}

          <select
            value={filters.orderStatus}
            onChange={(e) =>
              onChange((prev) => ({
                ...prev,
                orderStatus: e.target.value,
              }))
            }
            className="border border-[#bbcac1] rounded-xl px-4 py-2.5 text-sm bg-white focus:ring-2 focus:ring-[#006c4e]"
          >
            <option value="all">All Orders</option>
            <option value="pending">Pending</option>
            <option value="processing">Processing</option>
            <option value="packed">Packed</option>
            <option value="shipped">Shipped</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>

          {/* Payment */}

          <select
            value={filters.paymentStatus}
            onChange={(e) =>
              onChange((prev) => ({
                ...prev,
                paymentStatus: e.target.value,
              }))
            }
            className="border border-[#bbcac1] rounded-xl px-4 py-2.5 text-sm bg-white focus:ring-2 focus:ring-[#006c4e]"
          >
            <option value="all">All Payments</option>
            <option value="paid">Paid</option>
            <option value="pending">Pending</option>
            <option value="failed">Failed</option>
            <option value="refunded">Refunded</option>
          </select>

          {/* Reset */}

          <button
            onClick={() =>
              onChange({
                search: "",
                orderStatus: "all",
                paymentStatus: "all",
                startDate: null,
                endDate: null,
              })
            }
            className="flex items-center gap-2 rounded-xl px-4 py-2.5 bg-white border border-[#bbcac1] hover:bg-[#eff4ff] transition"
          >
            <MdRestartAlt />
            Reset
          </button>
        </div>
      </div>

      {/* Date Pickers */}

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-[#6c7a72]">From</label>

          <DatePicker
            selected={filters.startDate}
            onChange={(date) =>
              onChange((prev) => ({
                ...prev,
                startDate: date,
              }))
            }
            placeholderText="Start date"
            className="border border-[#bbcac1] rounded-xl px-4 py-2.5 bg-white w-full"
            dateFormat="dd/MM/yyyy"
            isClearable
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-[#6c7a72]">To</label>

          <DatePicker
            selected={filters.endDate}
            onChange={(date) =>
              onChange((prev) => ({
                ...prev,
                endDate: date,
              }))
            }
            placeholderText="End date"
            className="border border-[#bbcac1] rounded-xl px-4 py-2.5 bg-white w-full"
            dateFormat="dd/MM/yyyy"
            minDate={filters.startDate ?? undefined}
            isClearable
          />
        </div>
      </div>
    </div>
  );
};

export default FiltersBar;