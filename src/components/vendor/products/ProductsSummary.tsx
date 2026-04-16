
import React from 'react';

export default function ProductsSummary() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
      {/* Card 1: Stock Integrity */}
      <div className="bg-[#0b1f19] text-white p-8 rounded-3xl relative overflow-hidden group">
        <div className="relative z-10">
          <span className="text-emerald-400 font-bold text-xs uppercase tracking-widest">Stock Integrity</span>
          <h3 className="text-5xl font-extrabold tracking-tighter mt-3">98.2%</h3>
          <p className="text-white/70 mt-2 text-sm">Inventory health across all SKUs is at an all-time high.</p>
        </div>
        <div className="absolute -bottom-8 -right-8 text-[10rem] opacity-10 group-hover:scale-110 transition-transform duration-700">
          📦
        </div>
      </div>

      {/* Card 2: Active Listings */}
      <div className="bg-white p-8 rounded-3xl border border-border-light flex flex-col justify-between">
        <div>
          <span className="text-emerald-600 font-bold text-xs uppercase tracking-widest">Active Listings</span>
          <h3 className="text-5xl font-extrabold tracking-tighter mt-3 text-text-main">1,402</h3>
        </div>
        <div className="flex items-center gap-2 text-emerald-600 font-medium mt-6">
          <span>↑</span>
          <span className="text-sm">+12% from last month</span>
        </div>
      </div>

      {/* Card 3: High-Value Items */}
      <div className="bg-gradient-to-br from-emerald-50 to-white p-8 rounded-3xl border border-emerald-100 flex flex-col justify-between relative">
        <div>
          <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest">High-Value Items</span>
          <h3 className="text-5xl font-extrabold tracking-tighter mt-3 text-text-main">₦4.2M</h3>
          <p className="text-emerald-700/80 text-sm mt-2">Locked in secured-only PoD transactions.</p>
        </div>
        <div className="absolute top-6 right-6 text-6xl opacity-20">🔒</div>
      </div>
    </div>
  );
}