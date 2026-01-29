import React, { useEffect } from "react";
import {
  HiOutlineUser,
  HiOutlineLogout,
  HiOutlineShoppingBag,
  HiOutlineHeart,
  HiOutlineCog,
  HiOutlineHome,
  HiOutlineSupport,
} from "react-icons/hi";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}


interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

const NavItem = ({ icon, label, onClick }: NavItemProps) => (
  <button
    onClick={onClick}
    className="flex items-center gap-3 w-full px-4 py-3 rounded-xl
    text-slate-500 hover:bg-slate-50 hover:text-charcoal transition"
  >
    <span className="text-xl">{icon}</span>
    <span className="text-sm font-semibold">{label}</span>
  </button>
);

const ProfileMobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
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
              <div
                className="size-14 rounded-full bg-cover bg-center border-2 border-primary"
                style={{
                  backgroundImage: 'url("https://i.pravatar.cc/150?img=32")',
                }}
              />
              <div>
                <p className="font-bold text-charcoal">Alex Johnson</p>
                <p className="text-[10px] font-bold uppercase text-primary tracking-widest">
                  Premium Member
                </p>
              </div>
            </div>
          </section>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4 space-y-1">
            <NavItem
              icon={<HiOutlineUser />}
              label="Profile"
              onClick={onClose}
            />
            <NavItem
              icon={<HiOutlineShoppingBag />}
              label="Orders"
              onClick={onClose}
            />
            <NavItem
              icon={<HiOutlineHeart />}
              label="Favorites"
              onClick={onClose}
            />
            <NavItem
              icon={<HiOutlineCog />}
              label="Settings"
              onClick={onClose}
            />

            <div className="pt-4 mt-4 border-t border-slate-100">
              <NavItem
                icon={<HiOutlineHome />}
                label="Marketplace"
                onClick={onClose}
              />
              <NavItem
                icon={<HiOutlineSupport />}
                label="Support"
                onClick={onClose}
              />
            </div>
          </nav>

          {/* Bottom Actions */}
          <footer className="p-4 border-t border-slate-100 space-y-2">
            <button className="w-full h-10 rounded-xl bg-primary text-white font-bold hover:bg-[#00a383] transition">
              Upgrade to Pro
            </button>

            <button
              onClick={() => {
                onClose();
                // logout logic
              }}
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
