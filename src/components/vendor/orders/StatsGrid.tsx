import React from "react";
import {
  MdPendingActions,
  MdAutorenew,
  MdInventory,
  MdLocalShipping,
  MdPayments,
  MdTaskAlt,
  MdCancel,
} from "react-icons/md";

const StatsGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {/* Pending */}
      <div className="bg-white p-6 rounded-3xl shadow-sm border border-[#bbcac1] hover:shadow-md transition-all cursor-pointer">
        <div className="flex justify-between items-start mb-4">
          <MdPendingActions className="text-[#fd9923] text-3xl" />
          <span className="text-[#fd9923] bg-[#fd9923]/10 px-2.5 py-1 rounded-full text-xs font-semibold">
            +5%
          </span>
        </div>
        <h3 className="text-4xl font-semibold text-[#0b1c30]">42</h3>
        <p className="uppercase text-xs font-semibold text-[#3c4a43] mt-1 tracking-widest">
          Pending
        </p>
      </div>

      {/* Processing */}
      <div className="bg-white p-6 rounded-3xl shadow-sm border border-[#bbcac1] hover:shadow-md transition-all cursor-pointer">
        <div className="flex justify-between items-start mb-4">
          <MdAutorenew className="text-blue-500 text-3xl" />
        </div>
        <h3 className="text-4xl font-semibold text-[#0b1c30]">18</h3>
        <p className="uppercase text-xs font-semibold text-[#3c4a43] mt-1 tracking-widest">
          Processing
        </p>
      </div>

      {/* Packed */}
      <div className="bg-white p-6 rounded-3xl shadow-sm border border-[#bbcac1] hover:shadow-md transition-all cursor-pointer">
        <div className="flex justify-between items-start mb-4">
          <MdInventory className="text-indigo-500 text-3xl" />
        </div>
        <h3 className="text-4xl font-semibold text-[#0b1c30]">24</h3>
        <p className="uppercase text-xs font-semibold text-[#3c4a43] mt-1 tracking-widest">
          Packed
        </p>
      </div>

      {/* Shipped */}
      <div className="bg-white p-6 rounded-3xl shadow-sm border border-[#bbcac1] hover:shadow-md transition-all cursor-pointer">
        <div className="flex justify-between items-start mb-4">
          <MdLocalShipping className="text-emerald-500 text-3xl" />
        </div>
        <h3 className="text-4xl font-semibold text-[#0b1c30]">156</h3>
        <p className="uppercase text-xs font-semibold text-[#3c4a43] mt-1 tracking-widest">
          Shipped
        </p>
      </div>

      {/* Total Revenue */}
      <div className="bg-[#05b384] p-6 rounded-3xl shadow-sm hover:shadow-md transition-all cursor-pointer text-white col-span-2">
        <div className="flex justify-between items-start mb-4">
          <MdPayments className="text-white text-3xl" />
          <span className="bg-white/20 px-2.5 py-1 rounded-full text-xs font-semibold">
            +12.5%
          </span>
        </div>
        <h3 className="text-4xl font-semibold mt-6">₦1,245,000</h3>
        <p className="uppercase text-xs font-semibold mt-1 opacity-90">
          Total Revenue
        </p>
      </div>

      {/* Delivered */}
      <div className="bg-white p-6 rounded-3xl shadow-sm border border-[#bbcac1] hover:shadow-md transition-all cursor-pointer">
        <div className="flex justify-between items-start mb-4">
          <MdTaskAlt className="text-[#006c4e] text-3xl" />
        </div>
        <h3 className="text-4xl font-semibold text-[#0b1c30]">892</h3>
        <p className="uppercase text-xs font-semibold text-[#3c4a43] mt-1 tracking-widest">
          Delivered
        </p>
      </div>

      {/* Cancelled */}
      <div className="bg-white p-6 rounded-3xl shadow-sm border border-[#bbcac1] hover:shadow-md transition-all cursor-pointer">
        <div className="flex justify-between items-start mb-4">
          <MdCancel className="text-red-600 text-3xl" />
        </div>
        <h3 className="text-4xl font-semibold text-[#0b1c30]">12</h3>
        <p className="uppercase text-xs font-semibold text-[#3c4a43] mt-1 tracking-widest">
          Cancelled
        </p>
      </div>
    </div>
  );
};

export default StatsGrid;
