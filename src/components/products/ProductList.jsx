import ProductCard from "./ProductCard";

const productList = [
  {
    name: " Wireless Headphones",
    id: "1",
    vendor: "Mily Store",
    price: "30500",
    previoursPrice: "34000",
    location: "Aba Osisioma",
    payOnDelivery: true,
    rating: "4.2",
    condition: "NEW",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCpCmmBwvblK9fDweMK5Rl2MF8OrhSkJPBsVvE1fsFjosQgpKQbxHmL9QYRuyhcbVvKmMhwzAsNuW_epRTTMm4b9Qva_axlXfvYDPYsWzbn83f3OIk-9p3Ff4mS4cc9586DFr1mPqm_oGZXLfEyPl6NSePbuNJ_djwKoaNupsmurdijNblgdVPdbx9Z9x4N_skRtQEFAxNaeH2VADnqb_SukvsMqQhSMfOIhQbHPLwmaMTUUFoESZJSwTMhis02mpWCRP4Tc4pNWJo",
  },

  {
    name: "Smart Watch Pro",
    id: "2",
    vendor: "Mily Store",
    price: "26000",
    previoursPrice: "34000",
    payOnDelivery: false,
    location: "Aba Osisioma",
    rating: "3.9",
    condition: "NEW",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDo6CsAD0TEx3I6VwIHRWCTzPBE9QX9rD3uuMwXjDaz8WKcQ4s-F4AOn-5ifmmTb314LSCjCwjDWWGz55Qt2be2iR6STJ3o-Nob2IoIg-65-UAxet9Abbnh_3LKgKKtugzgg3k7w5wSqd5ec4AcP4LgZ3Q575qQuYmk0pq1TGicOeGTHoZ4uXCeOEvsPexwehsZwdWBnmDQ6wgn-6ja9kxqsnbC3Vz6m2vkxijuhqGc2kNfWYTedNwW4igvu0YcujSiO7bm50RHkyU",
  },

  {
    name: " Wireless Headphones",
    id: "3",
    vendor: "Mily Store",
    price: "30500",
    previoursPrice: "34000",
    location: "Aba Osisioma",
    payOnDelivery: true,
    rating: "4.2",
    condition: "NEW",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAtCIDkYxlrAQ-upUmkf3onOLNPWvpxB3ryw_O8PsTrvRg5NWOTci4cj1rUPR8kZfNJwnvmWPJ3URiasShDyX3DOxfniT49Ig4CuxvmWzgxtwANGUlFvzpB-8X48joASiFpoK4rkgAjRq5Pndn7wCpqxC-hGkBZxC_SKhnpN88NRda5v-zovhHMrdMTWh5yL5pdF589vyVQZKR3Pdmrspm7VxRWNAmjvrS_j1P-TVY796BeOccFOTDoTLH46abtppH8gjwayNPPFG8",
  },

  {
    name: " Wireless Headphones",
    id: "4",
    vendor: "Mily Store",
    price: "30500",
    previoursPrice: "34000",
    location: "Aba Osisioma",
    payOnDelivery: true,
    rating: "4.2",
    condition: "NEW",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCpCmmBwvblK9fDweMK5Rl2MF8OrhSkJPBsVvE1fsFjosQgpKQbxHmL9QYRuyhcbVvKmMhwzAsNuW_epRTTMm4b9Qva_axlXfvYDPYsWzbn83f3OIk-9p3Ff4mS4cc9586DFr1mPqm_oGZXLfEyPl6NSePbuNJ_djwKoaNupsmurdijNblgdVPdbx9Z9x4N_skRtQEFAxNaeH2VADnqb_SukvsMqQhSMfOIhQbHPLwmaMTUUFoESZJSwTMhis02mpWCRP4Tc4pNWJo",
  },
];

const ProductList = () => {
  return (
    <section className="flex-1 py-8">
      <div className="flex flex-col gap-4">
        <div className="flex gap-2 flex-wrap items-center px-4">
          <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-gray-200 dark:bg-gray-700 px-4">
            <p className="text-sm font-medium">Sort by: Price - Low to High</p>
            <span className="material-symbols-outlined text-lg">
              expand_more
            </span>
          </button>
          <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-gray-200 dark:bg-gray-700 px-4">
            <p className="text-sm font-medium">Pay on Delivery</p>
            <span className="material-symbols-outlined text-lg">
              expand_more
            </span>
          </button>
          <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-gray-200 dark:bg-gray-700 px-4">
            <p className="text-sm font-medium">Location</p>
            <span className="material-symbols-outlined text-lg">
              expand_more
            </span>
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 @[960px]:grid-cols-4 gap-4 px-4">
          {productList.map((product) => (
            <ProductCard
              key = {product.id}
              name={product.name}
              id= {product.id}
              vendor={product.vendor}
              price={product.price}
              previoursPrice={product.previoursPrice}
              image={product.image}
              location={product.location}
              rating={product.rating}
              payOnDelivery={product.payOnDelivery}
              condition = {product.condition}
              
            />
          ))}

          {/* <!-- Add 4 more skeleton loaders for perceived performance --> */}

          <div className="flex flex-col bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm animate-pulse">
            <div className="w-full aspect-square bg-gray-300 dark:bg-gray-700"></div>
            <div className="p-4 flex flex-col gap-3">
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
              <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
              <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded w-1/3"></div>
              <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-1/4"></div>
            </div>
            <div className="p-4 pt-0 flex items-center justify-between">
              <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded-lg flex-grow"></div>
              <div className="ml-2 h-10 w-10 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
            </div>
          </div>
          <div className="flex flex-col bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm animate-pulse">
            <div className="w-full aspect-square bg-gray-300 dark:bg-gray-700"></div>
            <div className="p-4 flex flex-col gap-3">
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
              <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
              <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded w-1/3"></div>
              <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-1/4"></div>
            </div>
            <div className="p-4 pt-0 flex items-center justify-between">
              <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded-lg flex-grow"></div>
              <div className="ml-2 h-10 w-10 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
            </div>
          </div>
          <div className="flex flex-col bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm animate-pulse">
            <div className="w-full aspect-square bg-gray-300 dark:bg-gray-700"></div>
            <div className="p-4 flex flex-col gap-3">
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
              <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
              <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded w-1/3"></div>
              <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-1/4"></div>
            </div>
            <div className="p-4 pt-0 flex items-center justify-between">
              <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded-lg flex-grow"></div>
              <div className="ml-2 h-10 w-10 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProductList;
