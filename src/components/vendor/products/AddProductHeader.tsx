"use client";

import React from "react";

export default function AddProductHeader() {
  return (
    <header className="mb-12">
      <nav className="flex items-center gap-2 text-sm text-slate-500 mb-4">
        <span>Products</span>
        <span className="text-xs">›</span>
        <span className="text-primary font-medium">New Listing</span>
      </nav>

      <h1 className="text-5xl font-bold tracking-tighter text-text-main mb-3">
        Register Inventory Item
      </h1>
      <p className="text-slate-600 max-w-2xl">
        Ensure precise categorization and high-fidelity media for maximum
        algorithmic exposure.
      </p>
    </header>
  );
}
