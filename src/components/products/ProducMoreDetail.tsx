import React from "react";

const ProductMoreDetail: React.FC = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-6xl w-full flex-1 gap-8">
            <hr className="border-t border-gray-200 dark:border-gray-700" />
            <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-lg">
              <h2 className="text-[#1F2937] dark:text-white text-2xl font-bold leading-tight tracking-tight px-4 pb-4 pt-2">
                More Details
              </h2>
              <div className="p-4 grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-x-6">
                <div className="col-span-1 md:col-span-2 grid grid-cols-subgrid border-t border-gray-200 dark:border-gray-700 py-5">
                  <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal">
                    Condition
                  </p>
                  <p className="text-[#1F2937] dark:text-gray-100 text-sm font-normal leading-normal">
                    Brand New
                  </p>
                </div>
                <div className="col-span-1 md:col-span-2 grid grid-cols-subgrid border-t border-gray-200 dark:border-gray-700 py-5">
                  <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal">
                    Authenticity
                  </p>
                  <p className="text-[#1F2937] dark:text-gray-100 text-sm font-normal leading-normal">
                    Guaranteed authentic.{" "}
                    <a className="text-primary hover:underline" href="#">
                      Learn more
                    </a>
                  </p>
                </div>
                <div className="col-span-1 md:col-span-2 grid grid-cols-subgrid border-t border-gray-200 dark:border-gray-700 py-5">
                  <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal">
                    Shipping
                  </p>
                  <p className="text-[#1F2937] dark:text-gray-100 text-sm font-normal leading-normal">
                    Local pickup available. Nationwide shipping from ₦2,500.
                  </p>
                </div>
                <div className="col-span-1 md:col-span-2 grid grid-cols-subgrid border-t border-gray-200 dark:border-gray-700 py-5">
                  <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal">
                    Return Policy
                  </p>
                  <p className="text-[#1F2937] dark:text-gray-100 text-sm font-normal leading-normal">
                    7-Day Free Returns
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-lg">
              <h2 className="text-[#1F2937] dark:text-white text-2xl font-bold leading-tight tracking-tight px-4 pb-4 pt-2">
                FAQ &amp; Support
              </h2>
              <div className="flex flex-col p-4">
                <details
                  className="flex flex-col border-t border-gray-200 dark:border-gray-700 py-3 group"
                  open
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-6 py-2 list-none">
                    <p className="text-[#1F2937] dark:text-gray-100 text-base font-semibold leading-normal">
                      How is the product's authenticity verified?
                    </p>
                    <span className="material-symbols-outlined text-[#1F2937] dark:text-gray-100 group-open:rotate-180 transition-transform">
                      expand_more
                    </span>
                  </summary>
                  <p className="text-gray-600 dark:text-gray-300 text-sm font-normal leading-normal pb-2 mt-2">
                    All products are sourced directly from authorized dealers
                    and are backed by our 100% authenticity guarantee. We have a
                    rigorous vetting process for all our vendors to ensure you
                    get only genuine items.
                  </p>
                </details>
                <details className="flex flex-col border-t border-gray-200 dark:border-gray-700 py-3 group">
                  <summary className="flex cursor-pointer items-center justify-between gap-6 py-2 list-none">
                    <p className="text-[#1F2937] dark:text-gray-100 text-base font-semibold leading-normal">
                      What are the shipping options and costs?
                    </p>
                    <span className="material-symbols-outlined text-[#1F2937] dark:text-gray-100 group-open:rotate-180 transition-transform">
                      expand_more
                    </span>
                  </summary>
                  <p className="text-gray-600 dark:text-gray-300 text-sm font-normal leading-normal pb-2 mt-2">
                    We offer nationwide delivery with fees starting from ₦2,500,
                    depending on your location. Local pickup is also available
                    for certain items and vendors. You can see the final
                    shipping cost at checkout.
                  </p>
                </details>
                <details className="flex flex-col border-t border-b border-gray-200 dark:border-gray-700 py-3 group">
                  <summary className="flex cursor-pointer items-center justify-between gap-6 py-2 list-none">
                    <p className="text-[#1F2937] dark:text-gray-100 text-base font-semibold leading-normal">
                      Can I return this item if I change my mind?
                    </p>
                    <span className="material-symbols-outlined text-[#1F2937] dark:text-gray-100 group-open:rotate-180 transition-transform">
                      expand_more
                    </span>
                  </summary>
                  <p className="text-gray-600 dark:text-gray-300 text-sm font-normal leading-normal pb-2 mt-2">
                    Yes, we offer a 7-Day Free Returns policy for most items in
                    their original condition. Please check our full return
                    policy for terms and conditions, as some product categories
                    may have different rules.
                  </p>
                </details>
              </div>
            </div>
            <div>
              <h2 className="text-[#1F2937] dark:text-white text-2xl font-bold leading-tight tracking-tight px-4 pb-4 pt-5">
                You Might Also Like
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
                {/* <!-- Product Card 1 --> */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col group">
                  <div className="relative">
                    <img
                      className="h-48 w-full object-cover"
                      data-alt="Red and black running shoe"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCouu2dJxCh0OppWULi-4bKX2y2eqdJGvQvJ12oMX3hAUs_i3VojmvwiplNf0wy4g336gY82mFF38Vndy9f9u0koQ1XTI41eBkXDp8HKiV-uCdQU9EtTtmzk1Qa9uAcX3FP1UZhKA6UwlQfdLE9LMZLFMcFFMs89ROE1RPsSejZQH8ZUBg9l-vNbaid_3M0ixvL9NRp08DuxIKebXWrqGTjt9p-rObAmQskXHRanCoVLMhwACIOBbTn_ywm8j46Uf3ahQWDzlnhpgg"
                    />
                    <div className="absolute top-0 right-0 p-2">
                      <button className="bg-white/70 dark:bg-gray-800/70 p-2 rounded-full text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">
                          favorite_border
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-base font-semibold text-[#1F2937] dark:text-white mb-1 truncate">
                      Sporty Running Sneakers
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      by Nike
                    </p>
                    <p className="text-lg font-bold text-primary mt-auto">
                      ₦35,000
                    </p>
                  </div>
                  <button className="bg-primary/20 dark:bg-primary/30 text-primary font-bold py-3 px-4 w-full text-sm hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-colors">
                    Add to Cart
                  </button>
                </div>
                {/* <!-- Product Card 2 --> */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col group">
                  <div className="relative">
                    <img
                      className="h-48 w-full object-cover"
                      data-alt="Silver analog watch with a white face"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOBNan_vncyqg003NucZpcUygFZUSUEzBivAyxNtV1RQ5u-tUQhK06gFDurBplbPRTf-cQoibEZQRt1Pt3Yi-uZCI3OFFMZ6_oPy5w6PKIw_Kh4rsxzfFMqkIioKeB9xGCkdc69vP8oI9_YxwqwOlBlwnrcCOOn9zN_HVfMJLv4-ctxEKEJRlC-0X7CIcQWfaARd4t7J33rLj3X5yxbqqjt9lrnZCPjHV5wCV8HFqzzPQM3_70ve6abJWyRYsc13iOZaOIIbD-Az0"
                    />
                    <div className="absolute top-0 right-0 p-2">
                      <button className="bg-white/70 dark:bg-gray-800/70 p-2 rounded-full text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">
                          favorite_border
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-base font-semibold text-[#1F2937] dark:text-white mb-1 truncate">
                      classNameic Leather Watch
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      by Fossil
                    </p>
                    <p className="text-lg font-bold text-primary mt-auto">
                      ₦52,500
                    </p>
                  </div>
                  <button className="bg-primary/20 dark:bg-primary/30 text-primary font-bold py-3 px-4 w-full text-sm hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-colors">
                    Add to Cart
                  </button>
                </div>
                {/* <!-- Product Card 3 --> */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col group">
                  <div className="relative">
                    <img
                      className="h-48 w-full object-cover"
                      data-alt="Black wireless headphones on a yellow background"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlA_7W7xMC_4neiD5ezLOI1csZx9YGamFm46EI5kb6qry1dCEeQlrNscLaKF4U4u0C2erwraE7HmCk-szAOY9s_fW_cracf6KXds8emyKkHhpTUq0Q83VaMNE5XiRBimIThHA4whh-9DDFI8RSpkt1bNWs2vToSYP-xRDsK3wIP-zQ-p7a_SB_pa29BajPmQRd9BbFEYhzrCxdwzlQHg2Fc5czO61dliAbvnqi7SErlGPmn1Nm--KChIcLXfDzqjwkG5851zlod5M"
                    />
                    <div className="absolute top-0 right-0 p-2">
                      <button className="bg-white/70 dark:bg-gray-800/70 p-2 rounded-full text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">
                          favorite_border
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-base font-semibold text-[#1F2937] dark:text-white mb-1 truncate">
                      Wireless Headphones
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      by Beats
                    </p>
                    <p className="text-lg font-bold text-primary mt-auto">
                      ₦89,999
                    </p>
                  </div>
                  <button className="bg-primary/20 dark:bg-primary/30 text-primary font-bold py-3 px-4 w-full text-sm hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-colors">
                    Add to Cart
                  </button>
                </div>
                {/* <!-- Product Card 4 --> */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col group">
                  <div className="relative">
                    <img
                      className="h-48 w-full object-cover"
                      data-alt="Stylish black sunglasses on a pink background"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDR_vf9HPKOw8RnSX4QCKGP0O2kwACzJGyrnJGV-fe0IQy-t1WLHGrmzqDw_Se82B8dan5hYGYzW8PlJbhbqcXg4nYxkXI7RrYM7-TJzA6bi8w3Qv8foslfEiDZ9cqmv3y28CNdvwmlsIfog1x2cZaOeBVAQasKBMoqRsHf9MX4hdg20laUZ_iS5LqgYcfdfPkGMFJ8IQ6qng8QLwrKhVrpExj1sDLlMMDCb1Lu9rvKW-h_feT3d0wwgofRGHDQvyJ89lTD_zOeqw4"
                    />
                    <div className="absolute top-0 right-0 p-2">
                      <button className="bg-white/70 dark:bg-gray-800/70 p-2 rounded-full text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">
                          favorite_border
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-base font-semibold text-[#1F2937] dark:text-white mb-1 truncate">
                      Polarized Sunglasses
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      by Ray-Ban
                    </p>
                    <p className="text-lg font-bold text-primary mt-auto">
                      ₦25,000
                    </p>
                  </div>
                  <button className="bg-primary/20 dark:bg-primary/30 text-primary font-bold py-3 px-4 w-full text-sm hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductMoreDetail;
