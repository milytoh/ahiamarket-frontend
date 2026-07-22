import React from "react";
import { MdPayments } from "react-icons/md";

const PaymentCardSkeleton = () => {
  return (
    <div className="bg-white rounded-3xl border border-[#bbcac1] shadow-sm p-6 animate-pulse">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-full bg-[#05b384]/10 flex items-center justify-center">
          <MdPayments className="text-[#05b384] text-2xl" />
        </div>

        <div className="space-y-2">
          <div className="h-5 w-40 bg-slate-200 rounded-md"></div>
          <div className="h-4 w-36 bg-slate-200 rounded-md"></div>
        </div>
      </div>

      {/* Details Section */}
      <div className="space-y-6">
        {/* Payment Method */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 text-[#6c7a72]">
            <div className="w-5 h-5 bg-slate-200 rounded"></div>
            <div className="h-4 w-16 bg-slate-200 rounded"></div>
          </div>
          <div className="h-5 w-24 bg-slate-200 rounded-md"></div>
        </div>

        {/* Status */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 text-[#6c7a72]">
            <div className="w-5 h-5 bg-slate-200 rounded"></div>
            <div className="h-4 w-16 bg-slate-200 rounded"></div>
          </div>
          <div className="h-6 w-20 bg-slate-200 rounded-full"></div>
        </div>

        {/* Transaction Ref */}
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2 text-[#6c7a72]">
            <div className="w-5 h-5 bg-slate-200 rounded"></div>
            <div className="h-4 w-28 bg-slate-200 rounded"></div>
          </div>
          <div className="h-5 w-40 bg-slate-200 rounded-md"></div>
        </div>

        <hr className="border-slate-200" />

        {/* Pricing Section */}
        <div className="space-y-4">
          {/* Subtotal */}
          <div className="flex justify-between">
            <div className="h-4 w-20 bg-slate-200 rounded"></div>
            <div className="h-4 w-28 bg-slate-200 rounded"></div>
          </div>

          {/* Shipping Fee */}
          <div className="flex justify-between">
            <div className="h-4 w-24 bg-slate-200 rounded"></div>
            <div className="h-4 w-24 bg-slate-200 rounded"></div>
          </div>

          {/* Total */}
          <div className="border-t pt-4 flex justify-between items-center">
            <div className="h-6 w-24 bg-slate-200 rounded"></div>
            <div className="h-6 w-32 bg-[#05b384]/20 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCardSkeleton;
