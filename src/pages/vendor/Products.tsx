import React from "react";
import ProductsHeader from "@/components/vendor/products/ProductsHeader";
import ProductsFilters from "@/components/vendor/products/ProductsFilters";
import ProductsTable from "@/components/vendor/products/ProductsTable";

import ProductsSummary from "@/components/vendor/products/ProductsSummary";

export default function Products() {
  return (
    <div className="bg-background-light min-h-screen p-6 md:p-10 max-w-7xl mx-auto">
      <ProductsHeader />
      <ProductsFilters />
      <ProductsTable />
      <ProductsSummary />
    </div>
  );
}
