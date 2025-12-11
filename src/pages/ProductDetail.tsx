import React from "react"

import { useParams } from "react-router-dom";

import ProductDetails from "@/components/products/ProductDetail"

const productList = [
  {
    name: " Wireless Headphones",
    id: "1",
    vendor: "Mily Store",
    price: "30500",
    previoursPrice: "34000",
    description:
      "Fully typed props for icons and input. Works perfectly with Tailwind’s dark/light mode.",
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
    description:
      "Fully typed props for icons and input. Works perfectly with Tailwind’s dark/light mode.",
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
    description:
      "Fully typed props for icons and input. Works perfectly with Tailwind’s dark/light mode.",
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
    description:
      "Fully typed props for icons and input. Works perfectly with Tailwind’s dark/light mode.",
    location: "Aba Osisioma",
    payOnDelivery: true,
    rating: "4.2",
    condition: "NEW",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCpCmmBwvblK9fDweMK5Rl2MF8OrhSkJPBsVvE1fsFjosQgpKQbxHmL9QYRuyhcbVvKmMhwzAsNuW_epRTTMm4b9Qva_axlXfvYDPYsWzbn83f3OIk-9p3Ff4mS4cc9586DFr1mPqm_oGZXLfEyPl6NSePbuNJ_djwKoaNupsmurdijNblgdVPdbx9Z9x4N_skRtQEFAxNaeH2VADnqb_SukvsMqQhSMfOIhQbHPLwmaMTUUFoESZJSwTMhis02mpWCRP4Tc4pNWJo",
  },
];


const ProductDetail: React.FC = () => {
  const {id } = useParams()
  

    return (
      <ProductDetails id={id! } products={productList} />  
  )
}

export  default ProductDetail