
import { MdChevronRight } from "react-icons/md";

const topProducts = [
  { name: "Silk Pattern Wrap Dress", price: "₦18,500", sold: "84" },
  { name: "Asymmetric Tailored Blazer", price: "₦22,000", sold: "52" },
  { name: "Artisan Leather Sandals", price: "₦12,000", sold: "41" },
];

export default function VendorTopProducts() {
  return (
    <div className="bg-white p-8 rounded-3xl border border-border-light h-full flex flex-col">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-bold text-text-main">Top Products</h2>
        <button className="text-primary text-sm font-bold hover:underline">
          View All →
        </button>
      </div>

      <div className="space-y-6 flex-1">
        {topProducts.map((product, i) => (
          <div key={i} className="flex items-center gap-5 group cursor-pointer">
            <div className="w-16 h-16 rounded-2xl overflow-hidden bg-slate-100 relative">
              <div className="absolute top-0 left-0 bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-br-xl">
                #{i + 1}
              </div>
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-text-main leading-tight">
                {product.name}
              </h4>
              <p className="text-sm text-slate-600">
                {product.price} •{" "}
                <span className="text-[#05b384] font-medium">
                  {product.sold} sold
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
