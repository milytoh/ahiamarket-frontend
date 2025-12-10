import React from "react";

interface ProductCardProp {
  key: string;
  name: string;
  id: string;
  vendor: string;
  price: string;
  previoursPrice: string;
  image: string;
  location: string;
  rating: string;
  payOnDelivery: boolean;
  condition: string;
}

const ProductCard: React.FC<ProductCardProp> = (prop)  => {
  return (
    <div className="flex flex-col group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
      <div className="relative w-full aspect-square">
        {prop.payOnDelivery && (
          <div className="absolute top-2 left-2 z-10 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-md">
            {/* Pay on Delivery */}
            pay on Delivery
          </div>
        )}
        <div className="absolute bottom-2 right-2 z-10 text-primary/70 text-2xl font-extrabold bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-md">
          {prop.condition}
        </div>
        <div
          className="w-full h-full bg-center bg-no-repeat bg-cover rounded-t-xl"
          data-alt="A modern wireless headphone"
          style={{
            backgroundImage: `url(${prop.image})`,
            // backgroundImage:
            //   "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCpCmmBwvblK9fDweMK5Rl2MF8OrhSkJPBsVvE1fsFjosQgpKQbxHmL9QYRuyhcbVvKmMhwzAsNuW_epRTTMm4b9Qva_axlXfvYDPYsWzbn83f3OIk-9p3Ff4mS4cc9586DFr1mPqm_oGZXLfEyPl6NSePbuNJ_djwKoaNupsmurdijNblgdVPdbx9Z9x4N_skRtQEFAxNaeH2VADnqb_SukvsMqQhSMfOIhQbHPLwmaMTUUFoESZJSwTMhis02mpWCRP4Tc4pNWJo')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
      <div className="p-4 flex flex-col gap-2 flex-grow">
        <h3 className="font-bold text-base text-gray-900 dark:text-white truncate">
          {prop.name}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
          by:{" "}
          <span className="text-primary dark:text-white">{prop.vendor} </span>
          <div
            className="text-yellow-400"
            data-icon="StarHalf"
            data-size="24px"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15px"
              height="15px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M239.2 97.3a15.9 15.9 0 0 0-13.8-11l-60.3-8.8L136.6 22a16 16 0 0 0-28.8 0L90.9 77.5l-60.3 8.8a16 16 0 0 0-8.9 27.3l43.7 42.6-10.3 60.1a16 16 0 0 0 23.2 16.9L128 205.3V40a8 8 0 0 1 7.4 4.9l20.4 41.4 45.7 6.7-33.1 32.3 7.8 45.6z" />
            </svg>
          </div>
          {prop.rating}
        </p>
        <div className="flex items-baseline gap-2">
          <p className="text-lg font-bold text-primary">₦{prop.price}</p>
          <p className="text-sm text-gray-400 line-through">
            ₦{prop.previoursPrice}
          </p>
        </div>
        <p className="text-xs text-gray-400 dark:text-gray-500 flex items-center gap-1">
          <div
            className="text-green-500"
            data-icon="LocationDot"
            data-size="24px"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M128 16C89 16 56 49 56 88c0 58 64 136 72 146 8-10 72-88 72-146 0-39-33-72-72-72zM128 120a32 32 0 1 1 0-64 32 32 0 0 1 0 64z" />
            </svg>
          </div>{" "}
          {prop.location}, NG
        </p>
      </div>
      <div className="p-4 pt-0 flex items-center justify-between">
        <button className="flex-grow flex items-center justify-center h-10 px-4 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary/90 transition-colors">
          Add to Cart
        </button>
        <button className="ml-2 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            fill="currentColor"
          >
            <path d="M480-160 388-244q-104-94-170-166t-94-126q-30-54-30-110 0-90 59-149.5T299-855q56 0 104 25t77 70q29-45 77-70t104-25q91 0 150 59.5T870-701q0 56-30 110t-94 126q-66 72-170 166L480-160Zm0-104q91-81 151-139.5T764-550q51-59 71.5-99T856-701q0-63-42.5-105T708-848q-49 0-89.5 23T547-756l-67 90-67-90q-23-32-63.5-55T260-848q-63 0-105 42T113-701q0 38 21.5 78.5T206-550q59 69 119.5 127.5T480-264Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
