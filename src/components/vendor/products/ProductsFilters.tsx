'use client';

import React from 'react';
import { MdFilterList } from 'react-icons/md';

export default function ProductsFilters() {
  return (
    <div className="bg-white rounded-3xl p-6 mb-10 flex flex-wrap gap-6 items-end border border-border-light">
      {/* Status Filter */}
      <div className="flex-1 min-w-[200px]">
        <label className="block text-xs font-bold text-slate-500 uppercase mb-2 tracking-widest">Status Filter</label>
        <select className="w-full bg-background-light border border-border-light rounded-2xl py-3 px-5 text-sm focus:ring-2 focus:ring-primary outline-none">
          <option>All Statuses</option>
          <option>Active</option>
          <option>Out of Stock</option>
          <option>In Draft</option>
        </select>
      </div>

      {/* Category Filter */}
      <div className="flex-1 min-w-[200px]">
        <label className="block text-xs font-bold text-slate-500 uppercase mb-2 tracking-widest">Category</label>
        <select className="w-full bg-background-light border border-border-light rounded-2xl py-3 px-5 text-sm focus:ring-2 focus:ring-primary outline-none">
          <option>All Categories</option>
          <option>Fashion</option>
          <option>Electronics</option>
          <option>Home & Kitchen</option>
          <option>Beauty</option>
        </select>
      </div>

      {/* Date Range */}
      <div className="flex-1 min-w-[200px]">
        <label className="block text-xs font-bold text-slate-500 uppercase mb-2 tracking-widest">Date Added Range</label>
        <div className="flex items-center bg-background-light border border-border-light rounded-2xl overflow-hidden">
          <input type="date" className="bg-transparent border-none py-3 px-4 text-sm focus:ring-0 w-full" />
          <span className="text-slate-400 px-2">–</span>
          <input type="date" className="bg-transparent border-none py-3 px-4 text-sm focus:ring-0 w-full" />
        </div>
      </div>

      <button className="bg-primary text-white p-4 rounded-2xl hover:bg-brand-green transition-all">
        <MdFilterList size={24} />
      </button>
    </div>
  );
}