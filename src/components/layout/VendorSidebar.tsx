"use client";

import React from "react";
import {
  MdGridView,
  MdInventory2,
  MdShoppingBag,
  MdAccountBalanceWallet,
  MdQueryStats,
  MdSettings,
  MdHelpOutline,
  MdLogout,
  MdDownload,
} from "react-icons/md";

export default function VendorSidebar() {
  return (
    <aside className="hidden md:flex h-screen w-64 fixed left-0 top-0 bg-[#e2f9ef] flex-col p-6 gap-y-2 z-50 border-r border-[#05b384]/10">
      {/* Logo / Header */}
      <div className="mb-10 flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-[#05b384] flex items-center justify-center">
          <span className="text-white text-2xl">💼</span>
        </div>
        <div>
          <h2 className="font-black text-[#05b384] text-lg leading-none">
            Vendor Portal
          </h2>
          <p className="text-[0.7rem] uppercase tracking-widest text-[#333333] font-bold opacity-70">
            Verified Enterprise
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1">
        <a
          href="#"
          className="flex items-center gap-3 bg-gradient-to-br from-[#05b384] to-[#00A859] text-white rounded-xl shadow-lg px-4 py-3 transition-all"
        >
          <MdGridView size={22} />
          <span className="font-medium text-[0.875rem]">Overview</span>
        </a>

        <a
          href="#"
          className="flex items-center gap-3 text-[#333333]/70 px-4 py-3 hover:bg-white/60 rounded-xl transition-all"
        >
          <MdInventory2 size={22} />
          <span className="font-medium text-[0.875rem]">Products</span>
        </a>

        <a
          href="#"
          className="flex items-center gap-3 text-[#333333]/70 px-4 py-3 hover:bg-white/60 rounded-xl transition-all"
        >
          <MdShoppingBag size={22} />
          <span className="font-medium text-[0.875rem]">Orders</span>
        </a>

        <a
          href="#"
          className="flex items-center gap-3 text-[#333333]/70 px-4 py-3 hover:bg-white/60 rounded-xl transition-all"
        >
          <MdAccountBalanceWallet size={22} />
          <span className="font-medium text-[0.875rem]">Transactions</span>
        </a>

        <a
          href="#"
          className="flex items-center gap-3 text-[#333333]/70 px-4 py-3 hover:bg-white/60 rounded-xl transition-all"
        >
          <MdQueryStats size={22} />
          <span className="font-medium text-[0.875rem]">Analytics</span>
        </a>

        <a
          href="#"
          className="flex items-center gap-3 text-[#333333]/70 px-4 py-3 hover:bg-white/60 rounded-xl transition-all"
        >
          <MdSettings size={22} />
          <span className="font-medium text-[0.875rem]">Settings</span>
        </a>
      </nav>

      {/* Bottom Section */}
      <div className="mt-auto space-y-1">
        <button className="w-full bg-white/70 hover:bg-white text-[#05b384] font-bold py-3 px-4 rounded-xl text-sm flex items-center justify-center gap-2 transition-all">
          <MdDownload size={18} />
          Download Report
        </button>

        <a
          href="#"
          className="flex items-center gap-3 text-[#333333]/70 px-4 py-2 hover:bg-white/60 rounded-xl transition-all"
        >
          <MdHelpOutline size={22} />
          <span className="font-medium text-[0.875rem]">Support</span>
        </a>

        <a
          href="#"
          className="flex items-center gap-3 text-[#333333]/70 px-4 py-2 hover:bg-white/60 rounded-xl transition-all"
        >
          <MdLogout size={22} />
          <span className="font-medium text-[0.875rem]">Logout</span>
        </a>
      </div>
    </aside>
  );
}
