const API_URL = import.meta.env.VITE_API_URL;

import { useParams } from "react-router-dom";

interface Product {
  id: string;
  name: string;
  sku: string;
  description: string;
  category: string;
  condition: string;
  images: any[];
  price: number;
  stock: number;
  status: string;
  pod: boolean;
  visible: boolean;
  createdAt: string;

  sales: number;
  revenue: number;
  views: number;
}



interface ProductDetailsProps {
  onEditProduct: (id: string) => void;
  onCloneProduct: (id: string) => void;
  onDeleteProduct: (id: string) => void;
  
  product: Product;
}

export default function ProductDetails({
  product,
  onEditProduct,
  onCloneProduct,
  onDeleteProduct,

}: ProductDetailsProps) {
  const { id } = useParams();

  const handleEditProduct = () => {
    onEditProduct(product?.id);
  };

  const handleCloneProduct = () => {
    onCloneProduct(product?.id);
  };

  const handleDeleteProduct = () => {
    onDeleteProduct(product?.id);
  };

  // const handleToggleVisible = () => {
  //   onToggleVisible(product?.id);
  // }

  const handleImageClick = (image: string) => {
    // Open the clicked image in a new tab
    window.open(image, "_blank");
  }

  return (
    <div className="min-h-screen bg-background-light p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* HEADER */}
        <div className="bg-white rounded-3xl border border-border-light p-6 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
            <div>
              <div className="flex items-center gap-3 flex-wrap">
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider">
                  Active
                </span>

                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider">
                  {product?.category}
                </span>
              </div>

              <h1 className="mt-4 text-3xl md:text-4xl font-black text-slate-900 leading-tight">
                {product?.name}
              </h1>

              <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-slate-500">
                <span>SKU: {product?.sku}</span>
                <span>•</span>
                <span>Created {product?.createdAt}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={handleEditProduct}
                className="h-12 px-6 rounded-2xl bg-primary text-white font-semibold hover:scale-[1.02] transition-all"
              >
                Edit Product
              </button>

              <button
                onClick={handleCloneProduct}
                className="h-12 px-6 rounded-2xl border border-border-light bg-white font-semibold hover:bg-slate-50 transition-all"
              >
                Clone
              </button>

              <button
                onClick={handleDeleteProduct}
                className="h-12 px-6 rounded-2xl bg-red-50 text-red-600 font-semibold hover:bg-red-100 transition-all"
              >
                Delete
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
          {/* LEFT SIDE */}
          <div className="xl:col-span-8 space-y-6">
            {/* IMAGE GALLERY */}
            <div className="bg-white rounded-3xl border border-border-light p-4 md:p-6 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {/* MAIN IMAGE */}
                <div className="md:col-span-3">
                  <img
                    onClick={handleImageClick.bind(
                      null,
                      `${API_URL}/uploads/products/${product?.images[0]}`,
                    )}
                    src={`${API_URL}/uploads/products/${product?.images[0]}`}
                    alt={product?.name}
                    className="w-full h-[320px] md:h-[500px] rounded-3xl object-cover cursor-pointer"
                  />
                </div>

                {/* SIDE IMAGES */}
                <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-1 gap-4">
                  {product?.images.slice(1).map((image, index) => (
                    <img
                      onClick={handleImageClick.bind(
                        null,
                        `${API_URL}/uploads/products/${image}`,
                      )}
                      key={index}
                      src={`${API_URL}/uploads/products/${image}`}
                      alt="product"
                      className="w-full h-[150px] md:h-full rounded-3xl object-cover cursor-pointer"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* PRODUCT DESCRIPTION */}
            <div className="bg-white rounded-3xl border border-border-light p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-6 rounded-full bg-primary" />
                <h2 className="text-xl font-black">Product Overview</h2>
              </div>

              <p className="text-slate-600 leading-8 text-[15px] md:text-base">
                {product?.description}
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl bg-slate-50 p-5 border border-slate-100">
                  <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">
                    Category
                  </p>

                  <p className="mt-2 text-lg font-bold text-slate-900">
                    {product?.category}
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5 border border-slate-100">
                  <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">
                    Condition
                  </p>

                  <p className="mt-2 text-lg font-bold text-slate-900">
                    {product?.condition}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="xl:col-span-4 space-y-6">
            {/* PRICE CARD */}
            <div className="bg-white rounded-3xl border border-border-light p-6 shadow-sm">
              <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">
                Current Price
              </p>

              <h2 className="mt-3 text-4xl font-black text-slate-900">
                ₦{product?.price.toLocaleString()}
              </h2>

              <div className="mt-6 h-3 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary"
                  style={{ width: `${Math.min(product?.stock * 10, 100)}%` }}
                />
              </div>

              <div className="mt-3 flex items-center justify-between text-sm">
                <span className="text-slate-500">Inventory</span>
                <span className="font-bold text-slate-900">
                  {product?.stock} Left
                </span>
              </div>
            </div>

            {/* TOGGLES */}
            <div className="bg-white rounded-3xl border border-border-light p-6 shadow-sm space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-slate-900">Pay On Delivery</p>
                  <p className="text-sm text-slate-500 mt-1">
                    Customers can pay during delivery
                  </p>
                </div>

                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                  
                    type="checkbox"
                    checked={product?.pod}
                    readOnly
                    className="sr-only peer"
                  />

                  <div
                    className="w-12 h-6 bg-slate-200 rounded-full peer peer-checked:bg-[#F7941D]
                  after:content-[''] after:absolute after:top-0.5 after:left-0.5
                  after:bg-white after:rounded-full after:h-5 after:w-5
                  after:transition-all peer-checked:after:translate-x-6"
                  />
                </label>
              </div>

              <div className="border-t pt-5 flex items-center justify-between">
                <div>
                  <p className="font-bold text-slate-900">Visibility</p>
                  <p className="text-sm text-slate-500 mt-1">
                    Product is publicly visible
                  </p>
                </div>

                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={product?.visible}
                    readOnly
                    className="sr-only peer"
                  />

                  <div
                    className="w-12 h-6 bg-slate-200 rounded-full peer peer-checked:bg-[#05b384]
                  after:content-[''] after:absolute after:top-0.5 after:left-0.5
                  after:bg-white after:rounded-full after:h-5 after:w-5
                  after:transition-all peer-checked:after:translate-x-6"
                  />
                </label>
              </div>
            </div>

            {/* ANALYTICS */}
            <div className="bg-white rounded-3xl border border-border-light p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-6 rounded-full bg-emerald-500" />
                <h2 className="text-xl font-black">Performance</h2>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div className="rounded-2xl bg-slate-50 border border-slate-100 p-5">
                  <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">
                    Total Sales
                  </p>

                  <h3 className="mt-2 text-3xl font-black text-slate-900">
                    {product?.sales}
                  </h3>
                </div>

                <div className="rounded-2xl bg-slate-50 border border-slate-100 p-5">
                  <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">
                    Revenue
                  </p>

                  <h3 className="mt-2 text-3xl font-black text-slate-900">
                    ₦{product?.revenue.toLocaleString()}
                  </h3>
                </div>

                <div className="rounded-2xl bg-slate-50 border border-slate-100 p-5">
                  <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">
                    Product Views
                  </p>

                  <h3 className="mt-2 text-3xl font-black text-slate-900">
                    {product?.views.toLocaleString()}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
