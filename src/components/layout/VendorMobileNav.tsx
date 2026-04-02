"use client";

import React from "react";
import {
  MdClose,
  MdGridView,
  MdInventory2,
  MdShoppingBag,
  MdAccountBalanceWallet,
  MdQueryStats,
  MdSettings,
  MdLogout,
} from "react-icons/md";

interface VendorMobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VendorMobileNav({
  isOpen,
  onClose,
}: VendorMobileNavProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[60] md:hidden bg-black/50"
      onClick={onClose}
    >
      <div
        className="bg-white w-80 h-full p-6 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#05b384] flex items-center justify-center text-white text-xl">
              💼
            </div>
            <h2 className="font-black text-[#05b384]">Vendor Portal</h2>
          </div>
          <button onClick={onClose} className="text-2xl">
            <MdClose />
          </button>
        </div>

        <nav className="flex-1 space-y-2">
          {[
            { icon: MdGridView, label: "Overview", active: true },
            { icon: MdInventory2, label: "Products" },
            { icon: MdShoppingBag, label: "Orders" },
            { icon: MdAccountBalanceWallet, label: "Transactions" },
            { icon: MdQueryStats, label: "Analytics" },
            { icon: MdSettings, label: "Settings" },
          ].map((item, i) => (
            <a
              key={i}
              href="#"
              className={`flex items-center gap-3 px-5 py-4 rounded-2xl transition-all ${
                item.active
                  ? "bg-[#05b384] text-white"
                  : "text-[#333333]/70 hover:bg-[#e2f9ef]"
              }`}
            >
              <item.icon size={24} />
              <span className="font-medium">{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="pt-6 border-t">
          <button className="w-full bg-[#05b384] text-white py-4 rounded-2xl font-bold mb-4">
            Download Report
          </button>
          <a
            href="#"
            className="flex items-center gap-3 text-[#333333]/70 py-3 px-4 hover:bg-[#e2f9ef] rounded-xl"
          >
            <MdLogout size={24} />
            Logout
          </a>
        </div>
      </div>
    </div>
  );
}
