import React from "react";
import { MdPersonSearch } from "react-icons/md";

const FiltersBar: React.FC = () => {
  return (
    <div className="p-4 border-b border-[#bbcac1] bg-[#f8f9ff] flex flex-wrap gap-4 items-center justify-between">
      <div className="flex flex-wrap gap-3">
        <select className="border border-[#bbcac1] rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#006c4e] focus:border-[#006c4e] bg-white">
          <option>Order Status</option>
          <option>Pending</option>
          <option>Processing</option>
          <option>Shipped</option>
        </select>

        <select className="border border-[#bbcac1] rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#006c4e] focus:border-[#006c4e] bg-white">
          <option>Payment Status</option>
          <option>Paid</option>
          <option>Unpaid</option>
        </select>

        <select className="border border-[#bbcac1] rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#006c4e] focus:border-[#006c4e] bg-white">
          <option>Date Range</option>
          <option>Today</option>
          <option>Last 7 Days</option>
          <option>This Month</option>
        </select>
      </div>

      <div className="relative w-full max-w-xs">
        <MdPersonSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6c7a72] text-xl" />
        <input
          type="text"
          placeholder="Filter by customer..."
          className="pl-10 pr-4 py-2 w-full border border-[#bbcac1] rounded-lg text-sm focus:ring-2 focus:ring-[#006c4e] focus:border-[#006c4e] bg-white"
        />
      </div>
    </div>
  );
};

export default FiltersBar;
