const API_URL = import.meta.env.VITE_API_URL;

import { useApi } from "@/hooks/useApi";

import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/store/hook";

import { logout } from "@/features/auth/authSlice";

import { NavLink } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineArchiveBox,
  HiOutlineWallet,
  HiOutlineHeart,
  HiOutlineCog6Tooth,
  HiOutlineClock,
} from "react-icons/hi2";

import { HiOutlineLogout } from "react-icons/hi";
import { useEffect, useState } from "react";
import Spinner from "../ui/Spinner";

interface SidebarNavLinkProps {
  to: string;
  icon: React.ReactNode;
  label: string;
}

const SidebarNavLink: React.FC<SidebarNavLinkProps> = ({ to, icon, label }) => {
  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) =>
        `
        flex items-center gap-3 px-4 py-3 rounded-xl transition-all
        ${
          isActive
            ? "text-white bg-primary font-bold"
            : "text-slate-500 hover:text-charcoal hover:bg-slate-50 font-semibold"
        }
        `
      }
    >
      <span className="text-xl shrink-0">{icon}</span>
      <span className="text-sm truncate">{label}</span>
    </NavLink>
  );
};
const ProfileSidebar: React.FC = () => {
  const [vendor, setVendor] = useState();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const { get, loading, error } = useApi(
    `${API_URL}/vendor/dashboard/overview`,
  );

  const logoutHandler = () => {
    dispatch(logout());

    navigate("/login");
  };

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const response = await get();
        setVendor(response.data.vendor);
       
      } catch (err) {}
    };

    fetchDashboard();
  }, []);

  const handlerVendor = () => {
    navigate("/profile/vendor/application");
  };

   const vendorDashboardHandler = () => {
     navigate("/vendor/dashboard");
   };
  return (
    <aside
      className="
        hidden lg:flex w-[25%] flex-col 
        bg-white p-6 border-r border-slate-100
        sticky top-0
        h-[calc(100vh)]
        shrink-0
      "
    >
      {/*  SCROLLABLE AREA (Profile + Nav) */}
      <div className="flex-1 min-h-0 overflow-y-auto pr-1">
        {/* Navigation */}
        <nav className="flex flex-col gap-1.5">
          <SidebarNavLink
            to="/profile"
            icon={<HiOutlineUser />}
            label="Account Profile"
          />

          <SidebarNavLink
            to="/profile/orders"
            icon={<HiOutlineArchiveBox />}
            label="Order History "
          />

          <SidebarNavLink
            to="/profile/wallet"
            icon={<HiOutlineWallet />}
            label="Wallet & Payments"
          />

          <SidebarNavLink
            to="/profile/transaction/history"
            icon={<HiOutlineClock />}
            label="Transaction History"
          />

          <SidebarNavLink
            to="/profile/settings"
            icon={<HiOutlineCog6Tooth />}
            label="Settings"
          />

          {/*  extra items just to prove scrolling works */}
          {/* <SidebarLink icon={<HiOutlineUser />} label="Security" />
          <SidebarLink icon={<HiOutlineUser />} label="Notifications" />
          <SidebarLink icon={<HiOutlineUser />} label="Addresses" /> */}
        </nav>
      </div>

      {/*  FIXED BOTTOM CTA */}
      <div className="pt-4 shrink-0">
        <div className="bg-primary/5 p-5 rounded-2xl border border-primary/10">
          {!vendor && !loading && (
            <p className="text-sm text-charcoal/70 font-medium mb-4 leading-relaxed">
              Sell your Products to the right people that needs it.
            </p>
          )}
          {!vendor && !loading && (
            <button
              onClick={handlerVendor}
              className="w-full h-10 rounded-xl bg-primary text-white text-sm font-bold hover:bg-[#00a383] transition-all shadow-md shadow-primary/20"
            >
              Apply for a Vendor
            </button>
          )}
          {vendor && !loading && (
            <p className="text-sm text-charcoal/70 font-medium mb-4 leading-relaxed">
              Manage your products, orders and sales from your vendor dashboard.
            </p>
          )}
          {vendor && !loading && (
            <button
              onClick={vendorDashboardHandler}
              className="w-full h-10 rounded-xl bg-primary text-white text-sm font-bold hover:bg-[#00a383] transition-all shadow-md shadow-primary/20"
            >
              Vendor Dashboard
            </button>
          )}

          {loading && (
            <div className="flex items-center justify-center h-16">
              <Spinner size="lg" />
            </div>
          )}
        </div>
      </div>
      <button
        onClick={logoutHandler}
        className="flex items-center justify-center gap-3 w-full px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 transition"
      >
        <HiOutlineLogout className="text-xl" />
        <span className="text-sm font-semibold">Logout</span>
      </button>
    </aside>
  );
};

export default ProfileSidebar;
