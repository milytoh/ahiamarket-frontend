import React from "react";
import ProductRow from "./ProductRow";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

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

interface ProductRowProps {
  products: Product[];
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onTogglePod: (id: string, value: boolean) => void;
  onToggleVisibility: (id: string, value: boolean) => void;
  onEditProduct: (id: string) => void;
  onDeleteProduct: (id: string) => void;
}

export default function ProductsTable({
  products,
  currentPage,
  totalPages,
  onPageChange,
  onTogglePod,
  onToggleVisibility,
  onEditProduct,
  onDeleteProduct,
}: ProductRowProps) {
  
  const getVisiblePages = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    pages.push(1);

    if (currentPage > 3) {
      pages.push("...");
    }

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) {
      pages.push("...");
    }

    pages.push(totalPages);

    return pages;
  };

  return (
    <div className="bg-white rounded-3xl border border-border-light overflow-hidden shadow-sm">
      {/* TABLE */}
      <table className="w-full">
        <thead className="bg-slate-50">
          <tr>
            <th className="py-6 px-8 text-left text-xs font-bold uppercase text-slate-500">
              Product
            </th>
            <th className="py-6 px-6 text-left text-xs font-bold uppercase text-slate-500">
              Base Price
            </th>
            <th className="py-6 px-6 text-left text-xs font-bold uppercase text-slate-500">
              Stock
            </th>
            <th className="py-6 px-6 text-left text-xs font-bold uppercase text-slate-500">
              PoD
            </th>
            <th className="py-6 px-6 text-left text-xs font-bold uppercase text-slate-500">
              Visibility
            </th>
            <th className="py-6 px-8 text-right text-xs font-bold uppercase text-slate-500">
              Actions
            </th>
          </tr>
        </thead>

        <tbody className="divide-y">
          {products.length === 0 ? (
            <tr>
              <td colSpan={6} className="text-center py-10 text-slate-400">
                No products found
              </td>
            </tr>
          ) : (
            products.map((product) => (
              <ProductRow
                key={product.id}
                product={product}
                onTogglePod={onTogglePod}
                onToggleVisibility={onToggleVisibility}
                onEditProduct = {onEditProduct}
                onDeleteProduct = {onDeleteProduct}
              />
            ))
          )}
        </tbody>
      </table>

      {/* PAGINATION */}
      <div className="p-6 bg-slate-50 flex justify-between items-center border-t">
        {/* Info */}
        <span className="text-xs font-medium text-slate-500">
          Page {currentPage} of {totalPages}
        </span>

        {/* Controls */}
        <div className="flex items-center gap-2">
          {/* Prev */}
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-white border disabled:opacity-40 hover:bg-slate-100"
          >
            <MdChevronLeft size={20} />
          </button>

          {/* Page Numbers */}
          {getVisiblePages().map((page, index) =>
            page === "..." ? (
              <span key={index} className="px-2 text-slate-400">
                ...
              </span>
            ) : (
              <button
                key={page}
                onClick={() => onPageChange(page as number)}
                className={`w-10 h-10 rounded-xl font-medium ${
                  currentPage === page
                    ? "bg-primary text-white"
                    : "bg-white border hover:bg-slate-100"
                }`}
              >
                {page}
              </button>
            ),
          )}

          {/* Next */}
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-white border disabled:opacity-40 hover:bg-slate-100"
          >
            <MdChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
