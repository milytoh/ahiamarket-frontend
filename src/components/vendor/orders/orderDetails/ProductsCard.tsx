import React from "react";

interface Product {
  productId: string;
  title: string;
  image: string;
  quantity: number;
  priceAtPurchase: number;
  lineTotal: number;
}

interface Props {
  products: Product[];
}

const ProductsCard: React.FC<Props> = ({ products }) => {
  return (
    <div className="bg-white rounded-3xl border border-[#bbcac1] shadow-sm animate-fade-in">
      {/* Header */}

      <div className="px-6 py-5 border-b border-[#bbcac1] flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-[#0b1c30]">Products</h2>

          <p className="text-sm text-[#6c7a72]">{products?.length} item(s)</p>
        </div>
      </div>

      <div>
        {products?.map((product, index) => (
          <div
            key={product?.productId}
            className={`p-6 flex flex-col md:flex-row gap-5 transition hover:bg-[#f8f9ff] ${
              index !== products?.length - 1 ? "border-b border-[#bbcac1]" : ""
            }`}
          >
            {/* Product Image */}

            <div className="w-28 h-28 rounded-2xl overflow-hidden border border-[#bbcac1] bg-[#f5f5f5] flex-shrink-0">
              <img
                src={product?.image}
                alt={product.title}
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
              />
            </div>

            {/* Product Info */}

            <div className="flex-1">
              <h3 className="font-semibold text-lg text-[#0b1c30]">
                {product.title}
              </h3>

              <div className="mt-4 grid sm:grid-cols-3 gap-4">
                <div>
                  <p className="text-xs uppercase tracking-wide text-[#6c7a72]">
                    Quantity
                  </p>

                  <p className="font-semibold">× {product?.quantity}</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wide text-[#6c7a72]">
                    Unit Price
                  </p>

                  <p className="font-semibold">
                    ₦{product?.priceAtPurchase.toLocaleString()}
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wide text-[#6c7a72]">
                    Subtotal
                  </p>

                  <p className="font-bold text-[#05b384] text-lg">
                    ₦{product?.lineTotal.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsCard;
