import React from "react";

const ProductDetail: React.FC = () => {
  return (
    <div className="container mx-auto p-4 md:p-8 mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
        <div className="relative">
          <div className="relative mb-4">
            <div
              className="bg-cover bg-center flex flex-col justify-between overflow-hidden bg-white rounded-lg shadow-sm min-h-[400px] md:min-h-[500px]"
              data-alt="Ankara Print Laptop Bag on a clean background"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuA47ZBsRW9BQ9j4ysZOQdnP_PR3lA-K5WqxefFH1SWSeV73FX89FNh2bFbkY7A0HaKx_WL9nWI8pwKHtjYCY5Yb7v7WXmrVCW05zgjZZ7cyLDKrRMG2zEDCM6fjNdi01ZKQd7_8jhiTMtJj9zoHgITFz2rAvrEsuvHvf9Y-lBbFUrHF7T6CUEn6y7KhYUemBJnG-0-W2aSJ0NBrvrO6Rj1cmzXP3LrZInwJML35lxk-3qTbl9njd7JhcHvtWkQhY_DNkFRHQOP4PA4")`,

                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="flex justify-start p-4">
                <span className="inline-flex items-center gap-2 bg-brand-green text-white text-xs font-semibold px-3 py-1 rounded-full">
                  <span className="material-symbols-outlined text-base">
                    verified
                  </span>
                  Verified Product
                </span>
              </div>
            </div>
          </div>
          <div className="flex space-x-2 overflow-x-auto pb-2">
            <img
              className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-lg cursor-pointer border-2 border-brand-green shadow-md"
              data-alt="Ankara Print Laptop Bag front view"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdH97JPtjmbgAbSvWBgyAI47YdXbcCdxJ4K3LxO6WIhnzJ3p4PwZu5L7cq99q-eMlpTxSIKbaZRfN0dtrtRm_eLVajOPdrmboTM6rOVBg57H_IX7Txfy7_AH_znvt9B0AWp_oewyx_NWZqvq28MXEgHmm-LckYQ9rt9i6qrB3e6Sx63nJMt3K87QDGfoKd-tJ27uFbRVMISSbKIro9LfnHG3FJhrOEgoHjQGfSn8fURSC1JbTTRAAATf6Be3l1F9UKTfl16_RDKs4"
            />
            <img
              className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-lg cursor-pointer border-2 border-transparent hover:border-brand-green"
              data-alt="Ankara Print Laptop Bag side angle"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAC1nJfBmWfuiPvp7B8mLMtRq3BEXdC5BTr98D8W5EDrAwVpx819lVXVV8Xb5_BX_rDrpU8s72vupsY6aN02m3NQzW8AGK7oyECxM2aKsfV4N0-UGebQaq6hrLpx3wpmXGphkDjqop81vNS4aIYDdiBqfuqu56Hc9AA_j33RFLNPU8SHdo80A0SbE-Ow3EO41ZM68te2vzcwkiCRy6ls_xeaYmNO4JK-wL0s4eA5O2k1MbKIzt1zHwYWrYnyjovte-zOJcOKxbG3fk"
            />
            <img
              className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-lg cursor-pointer border-2 border-transparent hover:border-brand-green"
              data-alt="Ankara Print Laptop Bag interior shot"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3b93iwJ7RPAtor113h5gzStdOfbMKIFIpbcYlbyYqM1e_ubdtsvvbniTPuExmpVwrp4NRkFyWor0YQNuw5LLxg0FE53D5C7rcJ0Yi1vNiJ8B5mH6Sl6oFQGvB-YFLXwnv1D_naZTgOfB260wuVjoy51avHy1KfBnwkm7WNhM4rkullKLximz6TpTwX-ziw6Atb7dPShZ9LLl12IyMv9R6h-TooPnA9bFnpqDX86Jcj8rHGKUQWSzPk0j2BveMTn6iqCsoqDxJxKs"
            />
            <div className="relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0">
              <img
                className="w-full h-full object-cover rounded-lg cursor-pointer border-2 border-transparent hover:border-brand-green"
                data-alt="Ankara Print Laptop Bag next to a Naira note for scale"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8qV2WGKGNo7Em7EqO79K5eHKt8ZoLJYO9JM39fOCBOT1eiUmqYn2hN9QjqVc8EVbIfwxlzBhDVQs3-8sYzP8SlBmw0aG_1typsAlbv7Hy-OqDVkzCfPa_WyJv9uHvc5geiwMFfKRaUiYo8Ga90mLJPDH7mjchcJ6EAPKO6OR7BRuOPLfJMBENQDPdDMPExuiY8zPAOghKJGfmNzDdZZj2AtDE9VnTWLBzNBHOzbqG-FEKhW77l07-Ck_t1KY5BJ0JOFq7MkeKYNE"
              />
              <span className="absolute bottom-1 right-1 text-white bg-black bg-opacity-50 text-[10px] px-1 rounded">
                Naira for scale
              </span>
            </div>
          </div>
        </div>
        {/* <!-- Product Info Section --> */}
        <div className="mt-8 lg:mt-0">
          {/* <!-- Vendor Card --> */}
          <div className="mb-6 bg-white p-4 rounded-lg shadow-sm border border-border-light">
            <div className="flex items-center justify-between gap-4">
              <div className="flex flex-col gap-1">
                <p className="text-sm text-gray-600">Sold by:</p>
                <a
                  className="text-text-main text-lg font-bold hover:text-brand-green"
                  href="#"
                >
                  Ankara Treasures
                </a>
              </div>
              <div className="text-right">
                <p className="text-brand-green text-lg font-bold flex items-center gap-1">
                  4.5{" "}
                  <span className="material-symbols-outlined text-xl text-brand-orange">
                    star
                  </span>
                </p>
                <p className="text-sm text-gray-500">(120 ratings)</p>
              </div>
            </div>
          </div>
          {/* <!-- Core Product Info --> */}
          <div className="flex flex-wrap justify-between gap-3 mb-4">
            <h1 className="text-text-main text-3xl md:text-4xl font-black leading-tight tracking-tight min-w-72">
              Ankara Print Laptop Bag - 15 Inch Lorem ipsum dolor sit, amet consectetur !
            </h1>
          </div>
          <div className="flex items-baseline gap-4 mb-2">
            <h1 className="text-text-main tracking-tight text-4xl md:text-5xl font-bold leading-tight">
              ₦15,000
            </h1>
            <p className="text-gray-500 text-xl font-normal leading-normal line-through">
              ₦20,000
            </p>
            <span className="bg-brand-orange text-white text-sm font-bold px-3 py-1 rounded-md">
              25% OFF
            </span>
          </div>
          <div className="bg-brand-orange/20 text-brand-orange text-sm font-semibold p-2 rounded-lg inline-flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined">timer</span>
            <span>Deal ends in: 02h : 45m : 10s</span>
          </div>
          <div className="flex items-center gap-2 text-brand-green font-semibold mb-6">
            <span className="material-symbols-outlined">check_circle</span>
            <span>In Stock - 12 items left</span>
          </div>
          {/* <!-- Payment Options --> */}
          <div className="mb-6">
            <p className="font-bold mb-3">Payment Options</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <label className="flex items-center p-4 border border-brand-green rounded-lg cursor-pointer bg-brand-green/10">
                <input
                  checked
                  className="form-radio text-brand-green focus:ring-brand-green"
                  name="payment"
                  type="radio"
                />
                <span className="ml-3 font-semibold text-text-main">
                  Pay Now
                </span>
              </label>
              <label className="flex items-center p-4 border border-border-light rounded-lg cursor-pointer hover:border-brand-green">
                <input
                  className="form-radio text-brand-green focus:ring-brand-green"
                  name="payment"
                  type="radio"
                />
                <span className="ml-3 font-semibold text-text-main">
                  Pay on Delivery{" "}
                  <span className="font-normal text-gray-500">(+₦500 fee)</span>
                </span>
              </label>
            </div>
            <div className="flex items-center justify-start gap-4 mt-3 grayscale opacity-70">
              <img
                className="h-5"
                data-alt="Opay logo"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDB2_Kn2zU-ePtRKNaidkfkJ6WcP3ZaIQj3Xf-l_UY6KXWofcDdB2W0Iipu_JU7NhjGapES8NIPBFKXvz9OePbM6Z5y0hM3eQ2lQOCEOqdiAUe3FJmPOq_6SDP65cmw37owwPsqA-cOTs982Ezne4j3GYz8HKN8psqZ2CUQHv26z8hORCAT99epbcHCCdP9MGNffonnxHpsqy87vSWhKeOv0iAgz3TtjzP_srvLFRQWEDPRMSgKpQgnBY54ysbKoy484h_ngLkwp94"
              />
              <img
                className="h-5"
                data-alt="PalmPay logo"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2dBNMSUY46mXvOVJgOsr8amCOANlIVcYxZPCy6VY5zeWE8vA7gO__mpd_hIzABQ6ZE17Hf7nY1G2P8oqV8bRM0VwNArAV-awkaHXHDQD7G9YrojlERmgih_cecZHXkYRi_B7ZxJ2sHelF7XBeUSdpx7V7NOSihNhCRQdAgQ5Sp-ZQjLvcurFBzJb9Qhqb5qNR7K1hOfRq6qiBeQbV4d9f10En2naH74P5NWfVcW9o51euvqk_-khqDNjPRRnaZP5e15Fcg2d1xZo"
              />
              <img
                className="h-4"
                data-alt="Verve logo"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBi87vypOc5aH3dIbMXzyJdoRPiHPF9Ni4SqDEQqrh2RAuJemvYtfP1y0sFT7bu46LFDQYY21UjW3q-_y25eAgHuubn1Iw0Ku1c39DXt0wVbtqghR2vehLrmWeJdm-rZNSGcJvftZgkDaLQXI3S1KPDEnebsdR1XcUg0IA4yOA0ofq9NltTcT4pfsgySpn4pQ4UqygIqnw1kc46QHEWjoi6TLizVh8Sm2wy_-2GYtxCikZ3RY9_n7e_1GaVlF7Bu9x0Iybc77VHdzc"
              />
              <img
                className="h-5"
                data-alt="Mastercard logo"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWGyZJpqplsZQCsFhyPHABOa5xeDT8ca19-AM4taG0NgtxI9uGqBMMhkmJaVs6z1sVQX1Z-fhKsyOhqwtDFOpRSTx11mg4XLsiRGu2gIAcAP1xoNvXS239gtdV6vg1HjtaUDkWXExE9EML8NDQveQ5qXxxpLbZyEkiSPQeQR1ac3JP8iV9UV3PHJq3Bp-6RIsbBT5uST7mg3drBYE-oWMtZVWdHJxc6H8BsmoiA2yLhdZwEaDlRgJYJXNeZ3eCW_CXY48GQoM1O40"
              />
            </div>
          </div>
          {/* <!-- Action Buttons --> */}
          <div className="space-y-3">
            <button className="w-full bg-brand-green text-white font-bold py-4 px-6 rounded-lg text-lg hover:bg-opacity-90 transition-colors flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">shopping_cart</span>
              Add to Cart
            </button>
            <button className="w-full bg-transparent border border-brand-green text-brand-green font-bold py-4 px-6 rounded-lg text-lg hover:bg-brand-green/10 transition-colors flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">bolt</span>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
