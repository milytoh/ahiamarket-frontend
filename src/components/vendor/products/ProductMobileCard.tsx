"use client";

import React from "react";
import { MdEdit, MdDelete, MdContentCopy } from "react-icons/md";

interface Product {
  id: string;
  name: string;
  sku: string;
  image: string;
  price: number;
  stock: number;
  status: string;
  pod: boolean;
  visible: boolean;
}

interface ProductMobileCardProps {
  product: Product;
  onTogglePod: (id: string, value: boolean) => void;
  onToggleVisibility: (id: string, value: boolean) => void;
  onEditProduct: (id: string) => void;
  onDeleteProduct: (id: string) => void;
  onCloneProduct: (id: string) => void;
}

export default function ProductMobileCard({
  product,
  onTogglePod,
  onToggleVisibility,
  onEditProduct,
  onDeleteProduct,
  onCloneProduct,
}: ProductMobileCardProps) {
  return (
    <div className="bg-white border border-border-light rounded-3xl p-4 shadow-sm">
      {/* TOP */}
      <div className="flex gap-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-24 h-24 rounded-2xl object-cover"
        />

        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-base truncate">{product.name}</h3>

          <p className="text-xs text-slate-500 font-mono mt-1">{product.sku}</p>

          <p className="mt-3 text-xl font-bold text-primary">
            ₦{product.price.toLocaleString()}
          </p>
        </div>
      </div>

      {/* STOCK */}
      <div className="mt-5">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-slate-500">Stock</span>

          <span className="font-medium">{product.stock} Left</span>
        </div>

        <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary"
            style={{
              width: `${Math.min(product.stock * 20, 100)}%`,
            }}
          />
        </div>
      </div>

      {/* TOGGLES */}
      <div className="mt-5 grid grid-cols-2 gap-4">
        {/* POD */}
        <div className="bg-slate-50 rounded-2xl p-3 flex items-center justify-between">
          <span className="text-sm font-medium">POD</span>

          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={product.pod}
              onChange={(e) => onTogglePod(product.id, e.target.checked)}
              className="sr-only peer"
            />

            <div
              className="w-11 h-6 bg-slate-200 rounded-full peer peer-checked:bg-[#F7941D]
            after:content-[''] after:absolute after:top-0.5 after:left-0.5
            after:bg-white after:rounded-full after:h-5 after:w-5
            after:transition-all peer-checked:after:translate-x-5"
            />
          </label>
        </div>

        {/* VISIBILITY */}
        <div className="bg-slate-50 rounded-2xl p-3 flex items-center justify-between">
          <span className="text-sm font-medium">Visible</span>

          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={product.visible}
              onChange={(e) => onToggleVisibility(product.id, e.target.checked)}
              className="sr-only peer"
            />

            <div
              className="w-11 h-6 bg-slate-200 rounded-full peer peer-checked:bg-[#05b384]
            after:content-[''] after:absolute after:top-0.5 after:left-0.5
            after:bg-white after:rounded-full after:h-5 after:w-5
            after:transition-all peer-checked:after:translate-x-5"
            />
          </label>
        </div>
      </div>

      {/* ACTIONS */}
      <div className="mt-5 flex gap-2">
        <button
          onClick={() => onEditProduct(product.id)}
          className="flex-1 h-11 rounded-2xl bg-emerald-50 hover:bg-emerald-100 flex items-center justify-center"
        >
          <MdEdit size={20} />
        </button>

        <button
          onClick={() => onCloneProduct(product.id)}
          className="flex-1 h-11 rounded-2xl bg-amber-50 hover:bg-amber-100 flex items-center justify-center"
        >
          <MdContentCopy size={20} />
        </button>

        <button
          onClick={() => onDeleteProduct(product.id)}
          className="flex-1 h-11 rounded-2xl bg-red-50 hover:bg-red-100 text-red-600 flex items-center justify-center"
        >
          <MdDelete size={20} />
        </button>
      </div>
    </div>
  );
}
