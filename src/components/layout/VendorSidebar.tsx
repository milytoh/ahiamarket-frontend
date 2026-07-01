import { NavLink } from "react-router-dom";
import {
  MdGridView,
  MdInventory2,
  MdShoppingBag,
  MdAccountBalanceWallet,
  MdQueryStats,
  MdSettings,
  MdHelpOutline,
  MdLogout,
  MdDownload,
} from "react-icons/md";

export default function VendorSidebar() {
  return (
    <aside className="hidden md:flex h-screen w-64 fixed left-0 top-0  flex-col p-6 gap-y-2 z-50 border-r border-[#05b384]/10">
      {/* Logo / Header */}
      <div className="mb-10 flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-[#05b384] flex items-center justify-center">
          <span className="text-white text-2xl">💼</span>
        </div>
        <div>
          <h2 className="font-black text-[#05b384] text-lg leading-none">
            Vendor Portal
          </h2>
          <p className="text-[0.7rem] uppercase tracking-widest text-[#333333] font-bold opacity-70">
            Verified Enterprise
          </p>
        </div>
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
          to="/vendor/dashboard/orders"
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

      {/* Bottom Section */}
      <div className="mt-auto space-y-1">
        <button className="w-full bg-white/70 hover:bg-white text-[#05b384] font-bold py-3 px-4 rounded-xl text-sm flex items-center justify-center gap-2 transition-all">
          <MdDownload size={18} />
          Download Report
        </button>

        <a
          href="#"
          className="flex items-center gap-3 text-[#333333]/70 px-4 py-2 hover:bg-white/60 rounded-xl transition-all"
        >
          <MdHelpOutline size={22} />
          <span className="font-medium text-[0.875rem]">Support</span>
        </a>

        <a
          href="#"
          className="flex items-center gap-3 text-[#333333]/70 px-4 py-2 hover:bg-white/60 rounded-xl transition-all"
        >
          <MdLogout size={22} />
          <span className="font-medium text-[0.875rem]">Logout</span>
        </a>
      </div>
    </aside>
  );
}
