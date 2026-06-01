const API_URL = import.meta.env.VITE_API_URL;

import { useApi } from "@/hooks/useApi";

import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/store/hook";

import { logout } from "@/features/auth/authSlice";

import { NavLink } from "react-router-dom";
import { HiOutlineLogout } from "react-icons/hi";
import Spinner from "../ui/Spinner";

import {
  HiOutlineUser,
  HiOutlineArchiveBox,
  HiOutlineWallet,
  HiOutlineHeart,
  HiOutlineCog6Tooth,
  HiOutlineClock,
} from "react-icons/hi2";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

interface MobileNavLinkProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

interface UserProfile {
  id: string;
  fullName: string;
  email: string;
  avatar?: string;
  memberSince: string;
  trustScore?: number;
  profileImage: string;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({
  to,
  icon,
  label,
  onClick,
}) => {
  return (
    <NavLink
      to={to}
      end
      onClick={onClick}
      className={({ isActive }) =>
        `
        flex items-center gap-3 px-4 py-3 rounded-xl transition-all
        ${
          isActive
            ? "text-brand-orange bg-brand-orange/10 font-bold"
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

const ProfileMobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<UserProfile>();
  const dispatch = useAppDispatch();

  const logoutHandler = () => {
    dispatch(logout());

    navigate("/login");
  };

  const [vendor, setVendor] = useState();

  const { get, loading, error } = useApi(
    `${API_URL}/vendor/dashboard/overview`,
  );
  //using custom hook
  const {
    get: getProfile,
    loading: loadingProfile,
    error: errorProfile,
  } = useApi(`${API_URL}/user/profile`);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const response = await get();
        setVendor(response.data.vendor);
      } catch (err) {}
    };

    fetchDashboard();
  }, []);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await getProfile();
        setProfile(response.profile.user);

      } catch (err) {}
    };

    fetchProfile();
  }, []);

  const handlerVendor = () => {
    navigate("/profile/vendor/application");
  };

  const vendorDashboardHandler = () => {
    navigate("/vendor/dashboard");
  };

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[60] lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-hidden={!isOpen}
        className={`fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-white z-[70] lg:hidden
        transform transition-transform duration-300 ease-in-out shadow-2xl
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <header className="flex items-center justify-between p-6 border-b border-slate-100">
            <div className="flex items-center gap-3 text-primary">
              <div className="size-8">
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M42.1739 20.1739L27.8261 5.82609C29.1366 7.13663 28.3989 10.1876 26.2002 13.7654C24.8538 15.9564 22.9595 18.3449 20.6522 20.6522C18.3449 22.9595 15.9564 24.8538 13.7654 26.2002C10.1876 28.3989 7.13663 29.1366 5.82609 27.8261L20.1739 42.1739C21.4845 43.4845 24.5355 42.7467 28.1133 40.548C30.3042 39.2016 32.6927 37.3073 35 35C37.3073 32.6927 39.2016 30.3042 40.548 28.1133C42.7467 24.5355 43.4845 21.4845 42.1739 20.1739Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h2 className="text-lg font-extrabold text-charcoal">
                AhiaMarket
              </h2>
            </div>

            <button
              onClick={onClose}
              aria-label="Close menu"
              className="p-2 text-charcoal/60 hover:text-charcoal"
            >
              ✕
            </button>
          </header>

          {/* Profile */}
          <section className="p-6 border-b border-slate-100">
            <div className="flex items-center gap-4">
              {loadingProfile ? (
                <Spinner size="md" />
              ) : (
                <div
                  className="size-14 rounded-full bg-cover bg-center border-2 border-primary"
                  style={{
                    backgroundImage: profile?.profileImage
                      ? `url(${API_URL}/uploads/users/profile/${profile.profileImage})`
                      : 'url("https://i.pravatar.cc/150?img=32")',
                  }}
                />
              )}

              <div>
                <p className="font-bold text-charcoal">{profile?.fullName}</p>
                <p className="text-[10px] font-bold uppercase text-primary tracking-widest">
                  Member
                </p>
              </div>
            </div>
          </section>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4 space-y-1">
            <MobileNavLink
              to="/profile"
              icon={<HiOutlineUser />}
              label="Account Profile"
              onClick={onClose}
            />

            <MobileNavLink
              to="/profile/orders"
              icon={<HiOutlineArchiveBox />}
              label="Order History "
            />

            <MobileNavLink
              to="/profile/wallet"
              icon={<HiOutlineWallet />}
              label="Wallet & Payments"
              onClick={onClose}
            />

            <MobileNavLink
              to="/profile/transaction/history"
              icon={<HiOutlineClock />}
              label="Transaction History"
              onClick={onClose}
            />

            <MobileNavLink
              to="/profile/settings"
              icon={<HiOutlineCog6Tooth />}
              label="Settings"
              onClick={onClose}
            />
          </nav>

          {/* Bottom Actions */}
          <footer className="p-4 border-t border-slate-100 space-y-2">
            {!vendor && !loading && !error && (
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
                Manage your products, orders and sales from your vendor
                dashboard.
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

            <button
              onClick={logoutHandler}
              className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 transition"
            >
              <HiOutlineLogout className="text-xl" />
              <span className="text-sm font-semibold">Logout</span>
            </button>
          </footer>
        </div>
      </aside>
    </>
  );
};

export default ProfileMobileNav;
