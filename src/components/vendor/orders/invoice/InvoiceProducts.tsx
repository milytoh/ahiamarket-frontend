import React from "react";

const API_URL = import.meta.env.VITE_API_URL;

interface Product {
  productId: string;
  title: string;
  image?: string;
  quantity: number;
  priceAtPurchase: number;
  lineTotal: number;
}

interface Props {
  products: Product[];
}

const InvoiceProducts: React.FC<Props> = ({ products }) => {
  return (
    <div className="mt-6 bg-white rounded-3xl border border-[#bbcac1] shadow-sm overflow-hidden animate-fade-in">
      {/* Header */}
      <div className="px-8 py-6 border-b border-[#bbcac1]">
        <h2 className="text-xl font-bold text-[#0b1c30]">Products</h2>

        <p className="text-sm text-[#6c7a72] mt-1">
          Items included in this order
        </p>
      </div>

      {/* Desktop */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead className="bg-[#f8f9ff]">
            <tr className="text-left text-sm text-[#6c7a72]">
              <th className="px-6 py-4">Product</th>
              <th className="px-6 py-4">SKU</th>
              <th className="px-6 py-4 text-center">Qty</th>
              <th className="px-6 py-4 text-right">Unit Price</th>
              <th className="px-6 py-4 text-right">Subtotal</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr
                key={product.productId}
                className="border-t border-[#edf2ef] hover:bg-[#fafcfd] transition"
              >
                <td className="px-6 py-5">
                  <div className="flex items-center gap-4">
                    <img
                      src={
                        product.image
                          ? `${API_URL}/uploads/products/${product.image}`
                          : "/placeholder-product.png"
                      }
                      alt={product.title}
                      className="w-16 h-16 rounded-xl border border-[#bbcac1] object-cover"
                    />

                    <div>
                      <h3 className="font-semibold text-[#0b1c30]">
                        {product.title}
                      </h3>

                      <p className="text-xs text-[#6c7a72]">Product</p>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-5 font-mono text-sm">-</td>

                <td className="px-6 py-5 text-center font-semibold">
                  {product.quantity}
                </td>

                <td className="px-6 py-5 text-right font-medium">
                  ₦{Number(product.priceAtPurchase).toLocaleString()}
                </td>

                <td className="px-6 py-5 text-right font-bold text-[#05b384]">
                  ₦{Number(product.lineTotal).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile */}
      <div className="md:hidden p-5 space-y-5">
        {products.map((product) => (
          <div
            key={product.productId}
            className="border border-[#bbcac1] rounded-2xl p-4"
          >
            <div className="flex gap-4">
              <img
                src={
                  product.image
                    ? `${API_URL}/uploads/products/${product.image}`
                    : "/placeholder-product.png"
                }
                alt={product.title}
                className="w-20 h-20 rounded-xl object-cover border"
              />

              <div className="flex-1">
                <h3 className="font-semibold text-[#0b1c30]">
                  {product.title}
                </h3>

                <p className="text-sm text-[#6c7a72] mt-1">
                  Qty: {product.quantity}
                </p>

                <p className="text-sm text-[#6c7a72]">
                  Unit: ₦{Number(product.priceAtPurchase).toLocaleString()}
                </p>

                <p className="mt-2 font-bold text-[#05b384]">
                  ₦{Number(product.lineTotal).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvoiceProducts;
