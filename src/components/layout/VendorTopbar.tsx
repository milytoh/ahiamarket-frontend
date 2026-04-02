"use client";

import React from "react";
import {
  MdNotifications,
  MdAccountCircle,
  MdKeyboardArrowDown,
} from "react-icons/md";

interface VendorTopbarProps {
  title: string;
  onMobileMenuClick: () => void;
}

export default function VendorTopbar({
  title,
  onMobileMenuClick,
}: VendorTopbarProps) {
  return (
    <header className="md:ml-64 sticky top-0 z-40 bg-[#e7fff4]/90 backdrop-blur-xl flex justify-between items-center w-full px-6 md:px-8 py-4 shadow-sm border-b border-[#05b384]/10">
      <div className="flex items-center gap-4">
        <button
          onClick={onMobileMenuClick}
          className="md:hidden p-2 text-[#05b384]"
        >
          ☰
        </button>

        <h1 className="text-xl font-extrabold tracking-tighter text-[#0b1f19]">
          {title}
        </h1>

        <div className="hidden md:block h-6 w-px bg-[#05b384]/20 mx-3" />

        <button className="hidden md:flex items-center gap-2 text-[#333333] font-medium text-sm hover:bg-white/70 px-4 py-2 rounded-xl transition-all">
          Lagos Fashion Hub
          <MdKeyboardArrowDown />
        </button>
      </div>

      <div className="flex items-center gap-6">
        {/* Wallet Balance */}
        <div className="hidden md:flex items-center gap-3 bg-white px-5 py-2.5 rounded-2xl border border-[#05b384]/10">
          <div className="flex flex-col items-end">
            <span className="text-[0.65rem] uppercase tracking-wider text-[#333333]/60 font-bold">
              Wallet Balance
            </span>
            <span className="text-sm font-bold text-[#05b384]">₦248,750</span>
          </div>
          <button className="bg-[#05b384] text-white px-5 py-1.5 rounded-xl text-xs font-bold hover:bg-[#00A859] transition-all">
            Settle
          </button>
        </div>

        {/* Notifications & Profile */}
        <div className="flex items-center gap-3">
          <button className="p-3 text-[#333333]/70 hover:bg-white/70 rounded-2xl relative transition-all">
            <MdNotifications size={24} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>

          <button className="p-3 text-[#333333]/70 hover:bg-white/70 rounded-2xl transition-all">
            <MdAccountCircle size={28} />
          </button>
        </div>
      </div>
    </header>
  );
}
