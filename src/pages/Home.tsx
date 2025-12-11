import React from "react";

import ProductList from "../components/products/ProductList";

const Home: React.FC = () => {
  return (
    <div
      className="relative font-manrope  flex h-auto min-h-screen w-full flex-col  justify-between group/design-root overflow-x-hidden"
      // style='font-family: "Plus Jakarta Sans", "Noto Sans", sans-serif;'
    >
      <div>
        {/* top bar to add */}
        
        {/* search bar */}
        <div className="px-4 py-3">
          <label className="flex flex-col min-w-40 h-12 w-full">
            <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
              <div
                className="text-[#45a18b] flex border-none bg-[#e6f4f1] items-center justify-center pl-4 rounded-l-lg border-r-0"
                data-icon="MagnifyingGlass"
                data-size="24px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                </svg>
              </div>
              <input
                placeholder="Search for products"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0c1d19] focus:outline-0 focus:ring-0 border-none bg-[#e6f4f1] focus:border-none h-full placeholder:text-[#45a18b] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
              />
            </div>
          </label>
        </div>
        {/* top filter */}
        <div className="flex gap-3 p-3 overflow-x-hidden">
          <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#e6f4f1] pl-4 pr-4">
            <p className="text-[#0c1d19] text-sm font-medium leading-normal">
              Categories
            </p>
          </div>
          <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#e6f4f1] pl-4 pr-4">
            <p className="text-[#0c1d19] text-sm font-medium leading-normal">
              Deals
            </p>
          </div>
          <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#e6f4f1] pl-4 pr-4">
            <p className="text-[#0c1d19] text-sm font-medium leading-normal">
              New Arrivals
            </p>
          </div>
          <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#e6f4f1] pl-4 pr-4">
            <p className="text-[#0c1d19] text-sm font-medium leading-normal">
              Top Rated
            </p>
          </div>
        </div>
        {/* top carosel */}
        <div className="p-4">
          <div
            className="bg-cover bg-center flex flex-col items-stretch justify-end rounded-lg pt-[132px]"
            style={{
              backgroundImage:
                'linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBj3LYnRjgL-qMXORvQ2lwF7g4sbJJJvcglqKu5hek0yss8smLhrMI79K1dtfDNfjDkC36la66DdUlZ6FQD4rawNybY6aTlJc4vTxzTyJt46pwhAQgyDI07jDvWsPRNf0YrDKt3ju_R0zKQmME2cGWNVZTUUjaH9D1YmCxAtCvAmF-UpGmeKsUPyYTzG44rdXK7An6XuDD8ZlJWwPI-JbgeC1I-aHl-X70HzTmh2nKrMlt_1MCZcKbAzrlAxo0_sr13SnpGW8IhaOoV")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="flex w-full items-end justify-between gap-4 p-4">
              <div className="flex max-w-[440px] flex-1 flex-col gap-1">
                <p className="text-white tracking-light text-2xl font-bold leading-tight max-w-[440px]">
                  Want to sell on Ahiamarket?
                </p>
                <p className="text-white text-base font-medium leading-normal">
                  Apply to become a vendor
                </p>
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-[#0c1d19] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 dark:text-white">
          Featured Products
        </h2>
        <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden">
          <div className="flex items-stretch p-4 gap-3">
            <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
              <div
                className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg flex flex-col"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCH27yRYeTdaQ7fQqupVPd-uIz1cULCqpnjqz3qQSK4ehSoLPv_FGeMX-Ty0SMGh0tvnMiB5X8USfYQUd4VLFxjwJyc3dI7PFqRr2z7-2-Fx50pprrVOty-4FaUl_H_1eQCKQCLxxk4TsjM01BUXKm3IRJtej00nB6h6S8ZydQO_Rvp5qPyP_X0a8Sl1hRHV8C69JZFljf2JCO0RhA0oU9u6JJshSsqqX4j8neXrpMIHwK1ksvpLUeLnorCyk5PzyO_RBFEcDLyr65Q')",
                }}
              ></div>
              <div>
                <p className="text-[#0c1d19] text-base font-medium leading-normal dark:text-white">
                  Fashion Finds
                </p>
                <p className="text-[#45a18b] text-sm font-normal leading-normal">
                  Latest trends
                </p>
              </div>
            </div>
            <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
              <div
                className="w-full bg-center bg-url([url()]) bg-no-repeat aspect-square bg-cover rounded-lg flex flex-col"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCFpvJvHQlxqwKZfAd6MjYh0zAgnbLF1xaD_UraI8MQQtneHzXJw8KSot8-xf5J2kQSV2eyyMXZJhZlky6MEAjvnKcBCDClh9k6oLDKKmBr63FWtJVS04QV_OIPpz3zcn5itgKaeVlKw_ecc0QjoVySk64YRYlE23hm3Ny9iLRTz-XQsGFDvorEP11alCIb4_WpMNC6GX-GrXi-r-OcBDH9X9hfdV76CmyiTZ478AtBJsMA6a0XO5paCDj6QVR-_yiP9wIf1uxuI-Cc")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <div>
                <p className="text-[#0c1d19] dark:text-white text-base font-medium leading-normal">
                  Tech Gadgets
                </p>
                <p className="text-[#45a18b]  text-sm font-normal leading-normal">
                  Must-have electronics
                </p>
              </div>
            </div>
            <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
              <div
                className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg flex flex-col"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBz31RW6cNR2uzPbtlSIdyvD_f7aw06AJgBzeR0ciEkM0TLpstjpV1beTTkxL6C5-hlvxsbdVBMrdCOHsOiYx9dnu-Lt-e75FdcaTIw7reQRoZUCZNa5LjhH6EbFTQQ7ikPSXOPsyvlIeKrVdnzuQKlQzkmhiH5R8-4QNHPAecSUBOXv3Bf1MgMHxBMRn7NIcx_Kp-Lbks6F-QIX9eBOSIjHh0Vh_bP8EfwEzREwMmJ7N2BXrC3CkLntopcTYQZm0EU1iCJDcSSAI-u")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <div>
                <p className="text-[#0c1d19] text-base font-medium leading-normal dark:text-white">
                  Home Essentials
                </p>
                <p className="text-[#45a18b] text-sm font-normal leading-normal">
                  Decorate your space
                </p>
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-[#0c1d19] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 dark:text-white">
          Popular Categories
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          <div className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAYG2Yl27axD-ZI33HxIsqTLaJE5jv1t-gIN-PP1_IWpYDhFnSjqvEFKTpbO8dH4r-HLqR0ds5YPqYj0Sy_gkU9d_rl11C8kaCSdaiU90jBq8Ahs5EiTAPlYJAfBGkTiGoqzcXiT6SPve7kSyqxhjI75R0SugmRAhkzjYwUQrbQpKzTqK8gIeSOmMHl3A0qdgKxGyf0pQ-Z0sH4fKfdLurPCz3JRh_UKrM7ZfxKziqdQh5FdapNLJMRK-9zwDhKqY6cqIDJQR_W8qWg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <p className="text-[#0c1d19] text-base font-medium leading-normal dark:text-white">
              Fashion
            </p>
          </div>
          <div className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBW7GHn5KvXXwCFdVAY4Q8VpSSVMKYl3Mr26-V8_NaLtVI7FOgCEtvdRbMes0GWgvfgKmN5c9pPLne5JG4JVxGF5-09O4dgT4SBuJegEJvESnA4FCdSanDnEPEf8q5yu4Q4yCsYqY0JxNiX_xTaQUtv5RIsGQPUiFUDmeyUyt0K_eE3LduT5fwtH-_qo9mJGjD5-ykyFYeT1s4jawiL0tBI98U-27y3rpsdo_k37Otkj9TH1ZauUmHmKaSBgGgelOWCzlMMS0zuQ2uX")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <p className="text-[#0c1d19] text-base font-medium leading-normal dark:text-white">
              Electronics
            </p>
          </div>
          <div className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDhdV5T7FUqMQnrlQ75GHuE8MRnh5ihW713l6iNNDEzw7Qy901OXWzy5r2cAhsMdXZI1jxfQfLo_3X4fmMZx7C7hfE2dBd5S3u_8kopT73ViORBgh4O2qV3x-ijdWRSQdT5KR8lC3IMLTa2iD9Q0W39yIpBp0UaLr5zbo1_RJGf3EGqhSsXIHbM54WBbIlSI2RQG86zQ0Do13dUMPNk_0QwstKglnNWy0UmVTZyUWQswON5PxoXakGy-ns73eKWztvjaW1eEZP0FOk-")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <p className="text-[#0c1d19] text-base font-medium leading-normal dark:text-white">
              Home &amp; Living
            </p>
          </div>
          <div className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuATR8lhewv8WqDQAq1khSd0gTneLRXyARi6djEsctg0NWDHGb49AARU9Lg1bWIy86Ekfvp0Tvc-9Z4LecYQlshAv-rMEx-tGxBGFEI_yaV7pbuaFQMojASCSMFua6cOi2kWDRZqtgZqcFUo9oCV-46Bj6qINl531IU5ZnH1uBoq2WiPidhhgFU1a-UEfsMw_BXFcskx7m9kNXHiR1tf79wQ1ATs7-giqOGezGaKM5J-BcSyDdLKOgLk7d16Ir-1Rfitf92vJk8bumYX")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <p className="text-[#0c1d19] text-base font-medium leading-normal">
              Beauty &amp; Health
            </p>
          </div>
        </div>
      </div>
     <ProductList/>
    
    </div>
  );
};
export default Home;
