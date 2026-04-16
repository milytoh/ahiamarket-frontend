"use client";

import { NavLink } from "react-router-dom";
import {
  MdGridView,
  MdInventory2,
  MdShoppingBag,
  MdAccountBalanceWallet,
  MdQueryStats,
  MdSettings,

  MdLogout,
 
  MdClose,
} from "react-icons/md";

interface VendorMobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VendorMobileNav({
  isOpen,
  onClose,
}: VendorMobileNavProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[60] md:hidden bg-black/50"
      onClick={onClose}
    >
      <div
        className="bg-white w-80 h-full p-6 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#05b384] flex items-center justify-center text-white text-xl">
              💼
            </div>
            <h2 className="font-black text-[#05b384]">Vendor Portal</h2>
          </div>
          <button onClick={onClose} className="text-2xl">
            <MdClose />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1">
          <NavLink
            to="/vendor/dashboard"
            end
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200 ${
                isActive
                  ? "bg-gradient-to-br from-[#05b384] to-[#00A859] text-white shadow-lg"
                  : "text-[#333333]/70 hover:bg-white/60"
              }`
            }
          >
            <MdGridView size={22} />
            <span className="font-medium text-[0.875rem]">Overview</span>
          </NavLink>

          <NavLink
            to="/vendor/dashboard/products"
            end
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200 ${
                isActive
                  ? "bg-gradient-to-br from-[#05b384] to-[#00A859] text-white shadow-lg"
                  : "text-[#333333]/70 hover:bg-white/60"
              }`
            }
          >
            <MdInventory2 size={22} />
            <span className="font-medium text-[0.875rem]">Products</span>
          </NavLink>

          <NavLink
            to="/vendor/orders"
            end
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200 ${
                isActive
                  ? "bg-gradient-to-br from-[#05b384] to-[#00A859] text-white shadow-lg"
                  : "text-[#333333]/70 hover:bg-white/60"
              }`
            }
          >
            <MdShoppingBag size={22} />
            <span className="font-medium text-[0.875rem]">Orders</span>
          </NavLink>

          <NavLink
            to="/vendor/transactions"
            end
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200 ${
                isActive
                  ? "bg-gradient-to-br from-[#05b384] to-[#00A859] text-white shadow-lg"
                  : "text-[#333333]/70 hover:bg-white/60"
              }`
            }
          >
            <MdAccountBalanceWallet size={22} />
            <span className="font-medium text-[0.875rem]">Transactions</span>
          </NavLink>

          <NavLink
            to="/vendor/analytics"
            end
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200 ${
                isActive
                  ? "bg-gradient-to-br from-[#05b384] to-[#00A859] text-white shadow-lg"
                  : "text-[#333333]/70 hover:bg-white/60"
              }`
            }
          >
            <MdQueryStats size={22} />
            <span className="font-medium text-[0.875rem]">Analytics</span>
          </NavLink>

          <NavLink
            to="/vendor/settings"
            end
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200 ${
                isActive
                  ? "bg-gradient-to-br from-[#05b384] to-[#00A859] text-white shadow-lg"
                  : "text-[#333333]/70 hover:bg-white/60"
              }`
            }
          >
            <MdSettings size={22} />
            <span className="font-medium text-[0.875rem]">Settings</span>
          </NavLink>
        </nav>

        <div className="pt-6 border-t">
          <button className="w-full bg-[#05b384] text-white py-4 rounded-2xl font-bold mb-4">
            Download Report
          </button>
          <a
            href="#"
            className="flex items-center gap-3 text-[#333333]/70 py-3 px-4 hover:bg-[#e2f9ef] rounded-xl"
          >
            <MdLogout size={24} />
            Logout
          </a>
        </div>
      </div>
    </div>
  );
}
