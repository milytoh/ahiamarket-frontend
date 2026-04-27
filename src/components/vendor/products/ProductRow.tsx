"use client";

import React from "react";
import { MdEdit, MdContentCopy, MdDelete } from "react-icons/md";

interface Product {
  id: number;
  name: string;
  sku: string;
  image: string;
  price: number;
  stock: number;
  status: string;
  pod: boolean;
}

interface ProductRowProps {
  product: Product;
  onRowClick?: (product: Product) => void;
  onTogglePod: (id: number, value: boolean) => void;
}

export default function ProductRow({
  product,
  onRowClick,
  onTogglePod,
}: ProductRowProps) {
  const handleRowClick = () => {
    if (onRowClick) onRowClick(product);
  };

  const togglePoD = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();

    const newValue = e.target.checked;

    onTogglePod(product.id, newValue);
  };

  return (
    <tr
      onClick={handleRowClick}
      className="hover:bg-emerald-50/70 transition-colors cursor-pointer group"
    >
      {/* Product Info */}
      <td className="py-6 px-8">
        <div className="flex items-center gap-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-16 h-16 object-cover rounded-2xl group-hover:scale-105 transition-transform"
          />
          <div>
            <p className="font-semibold text-text-main">{product.name}</p>
            <p className="text-xs text-slate-500 font-mono">{product.sku}</p>
          </div>
        </div>
      </td>

      {/* Price */}
      <td className="py-6 px-6 font-bold text-text-main">
        ₦{product.price.toLocaleString()}
      </td>

      {/* Stock */}
      <td className="py-6 px-6">
        <div className="flex items-center gap-3">
          <div className="h-2 w-20 bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all"
              style={{ width: `${Math.min(product.stock * 20, 100)}%` }}
            />
          </div>
          <span className="text-sm font-medium text-slate-600">
            {product.stock} Left
          </span>
        </div>
      </td>

      <td className="py-6 px-6">
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
            POD
          </span>

          <label className="relative inline-flex items-center cursor-pointer ">
            <input
              type="checkbox"
              checked={product.pod}
              onChange={togglePoD}
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
      </td>

      {/* Visibility Toggle */}
      <td className="py-6 px-6">
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" defaultChecked />
          <div
            className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:bg-[#05b384] 
                          after:content-[''] after:absolute after:top-0.5 after:left-0.5 
                          after:bg-white after:border after:rounded-full after:h-5 after:w-5 
                          after:transition-all peer-checked:after:translate-x-5"
          />
        </label>
      </td>

      {/* Actions */}
      <td className="py-6 px-8 text-right" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-end gap-2">
          <button
            className="p-3 hover:bg-emerald-100 rounded-xl transition-colors"
            title="Edit"
            onClick={() => alert(`Edit ${product.name}`)}
          >
            <MdEdit size={20} />
          </button>
          <button
            className="p-3 hover:bg-amber-100 rounded-xl transition-colors"
            title="Clone"
            onClick={() => alert(`Clone ${product.name}`)}
          >
            <MdContentCopy size={20} />
          </button>
          <button
            className="p-3 hover:bg-red-100 text-red-600 rounded-xl transition-colors"
            title="Delete"
            onClick={() => alert(`Delete ${product.name}`)}
          >
            <MdDelete size={20} />
          </button>
        </div>
      </td>
    </tr>
  );
}
