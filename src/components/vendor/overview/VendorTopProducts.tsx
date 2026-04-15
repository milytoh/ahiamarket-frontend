"use client";

import React from "react";
import { MdChevronRight } from "react-icons/md";

interface TopProduct {
  productId: string;
  name: string;
  totalSold: number;
  revenue: number;
}

interface VendorTopProductsProps {
  products?: TopProduct[];
}

export default function VendorTopProducts({
  products = [],
}: VendorTopProductsProps) {
  // Fallback if no products
  if (!products || products.length === 0) {
    return (
      <div className="bg-white p-8 rounded-3xl border border-border-light h-full flex flex-col">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-bold text-text-main">Top Products</h2>
        </div>
        <div className="flex-1 flex items-center justify-center text-slate-400">
          No products sold yet
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-3xl border border-border-light h-full flex flex-col">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-bold text-text-main">Top Products</h2>
        <button className="text-primary text-sm font-bold hover:underline">
          View All →
        </button>
      </div>

      <div className="space-y-6 flex-1">
        {products.map((product, i) => (
          <div
            key={product.productId || i}
            className="flex items-center gap-5 group cursor-pointer hover:bg-slate-50 p-2 -mx-2 rounded-xl transition-colors"
          >
            {/* Product Image Placeholder */}
            <div className="w-16 h-16 rounded-2xl overflow-hidden bg-slate-100 relative flex-shrink-0">
              <div className="absolute top-0 left-0 bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-br-xl">
                #{i + 1}
              </div>
              {/* You can replace this with real image when available */}
              <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-slate-400 text-xs">
                IMG
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-text-main leading-tight truncate">
                {product.name}
              </h4>
              <p className="text-sm text-slate-600">
                ₦{product.revenue.toLocaleString()} •{" "}
                <span className="text-[#05b384] font-medium">
                  {product.totalSold} sold
                </span>
              </p>
            </div>

            <MdChevronRight
              className="text-slate-400 group-hover:text-primary transition-colors"
              size={24}
            />
          </div>
        ))}
      </div>

      {/* Growth Tip */}
      <div className="mt-8 p-5 bg-emerald-50 rounded-2xl flex gap-4">
        <div className="text-2xl">💡</div>
        <div>
          <p className="text-xs font-bold text-emerald-700">Growth Tip</p>
          <p className="text-sm text-emerald-700/80">
            Bundle your top 2 items for a 15% boost in average order value.
          </p>
        </div>
      </div>
    </div>
  );
}
