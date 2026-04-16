'use client';

import React from 'react';
import ProductRow from './ProductRow';

const sampleProducts = [
  {
    id: 1,
    name: "Studio 4X Wireless Headphones",
    sku: "EL-WF-0045",
    image: "https://lh3.googleusercontent.com/aida-public/...",
    price: 85000,
    stock: 5,
    status: "active",
    podEnabled: true,
  },
  // Add more as needed
];

export default function ProductsTable() {
  return (
    <div className="bg-white rounded-3xl border border-border-light overflow-hidden shadow-sm">
      <table className="w-full">
        <thead className="bg-slate-50">
          <tr>
            <th className="py-6 px-8 text-left font-bold text-xs uppercase tracking-widest text-slate-500">Product</th>
            <th className="py-6 px-6 text-left font-bold text-xs uppercase tracking-widest text-slate-500">Base Price</th>
            <th className="py-6 px-6 text-left font-bold text-xs uppercase tracking-widest text-slate-500">Stock</th>
            <th className="py-6 px-6 text-left font-bold text-xs uppercase tracking-widest text-slate-500">PoD</th>
            <th className="py-6 px-6 text-left font-bold text-xs uppercase tracking-widest text-slate-500">Visibility</th>
            <th className="py-6 px-8 text-right font-bold text-xs uppercase tracking-widest text-slate-500">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {sampleProducts.map(product => (
            <ProductRow key={product.id} product={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
}