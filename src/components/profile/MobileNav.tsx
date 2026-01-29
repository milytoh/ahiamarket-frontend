import React, { useEffect } from "react";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-[60] lg:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Slide-in Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-white z-[70] lg:hidden transform transition-transform duration-300 ease-in-out shadow-2xl ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-100">
            <div className="flex items-center gap-3 text-primary">
              <div className="size-8 shrink-0">
                <svg
                  fill="none"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M42.1739 20.1739L27.8261 5.82609C29.1366 7.13663 28.3989 10.1876 26.2002 13.7654C24.8538 15.9564 22.9595 18.3449 20.6522 20.6522C18.3449 22.9595 15.9564 24.8538 13.7654 26.2002C10.1876 28.3989 7.13663 29.1366 5.82609 27.8261L20.1739 42.1739C21.4845 43.4845 24.5355 42.7467 28.1133 40.548C30.3042 39.2016 32.6927 37.3073 35 35C37.3073 32.6927 39.2016 30.3042 40.548 28.1133C42.7467 24.5355 43.4845 21.4845 42.1739 20.1739Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h2 className="text-charcoal text-lg font-extrabold">
                AhiaMarket
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 -mr-2 text-charcoal/60 hover:text-charcoal transition-colors"
              aria-label="Close menu"
            >
              <span className="material-symbols-outlined text-[24px]">
                close
              </span>
            </button>
          </div>

          {/* Profile Section */}
          <div className="p-6 border-b border-slate-100">
            <div className="flex items-center gap-4">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-14 border-2 border-primary shadow-sm shrink-0"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBQmbU8DE3q2Io_Em_DYQombC7zJw8oXSmHsCcPhebOQchzAu6tkeEoAuWEmYSURe82gtJQdO9CEQQHmxnJGynYGzg7HRQSHP37fWbE_J4ckvnxcFdOM0Hpza2WAtZQYdSHieGxxLgx-aZIlN_Boi6lrsq4Bq0N7sGzzZ2zgAFWZlUpkpi3XeB0vsxWJgXNF9QxmlM0JtZOLuCb4pH0bFnjjXsVhO5wP76NFaKsTS1rWzsws9Fom7iFs_Pelh0K6fVzwJxp9DryhfWZ")`,
                }}
              />
              <div className="flex flex-col overflow-hidden">
                <h1 className="text-charcoal text-base font-bold leading-none mb-1.5 truncate">
                  Alex Johnson
                </h1>
                <p className="text-primary text-[10px] font-bold uppercase tracking-widest truncate">
                  Premium Member
                </p>
              </div>
            </div>
          </div>

          {/* Search Bar (Mobile) */}
          <div className="p-4 md:hidden border-b border-slate-100">
            <div className="flex w-full items-stretch rounded-xl h-11 bg-slate-100 focus-within:ring-2 focus-within:ring-primary/20 transition-all">
              <div className="text-slate-400 flex items-center justify-center pl-4">
                <span className="material-symbols-outlined text-[20px]">
                  search
                </span>
              </div>
              <input
                className="form-input w-full border-none bg-transparent h-full placeholder:text-slate-400 px-4 pl-2 text-sm font-normal focus:ring-0"
                placeholder="Search..."
              />
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto p-4">
            <div className="flex flex-col gap-1.5 mb-6">
              <a
                className="flex items-center gap-3 px-4 py-3 rounded-xl sidebar-link-active transition-all"
                href="#"
                onClick={onClose}
              >
                <span className="material-symbols-outlined text-[22px] fill-[1]">
                  person
                </span>
                <p className="text-sm font-bold">Account Profile</p>
              </a>
              <a
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-charcoal transition-all"
                href="#"
                onClick={onClose}
              >
                <span className="material-symbols-outlined text-[22px]">
                  package
                </span>
                <p className="text-sm font-semibold">Order History</p>
              </a>
              <a
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-charcoal transition-all"
                href="#"
                onClick={onClose}
              >
                <span className="material-symbols-outlined text-[22px]">
                  account_balance_wallet
                </span>
                <p className="text-sm font-semibold">Wallet &amp; Payments</p>
              </a>
              <a
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-charcoal transition-all"
                href="#"
                onClick={onClose}
              >
                <span className="material-symbols-outlined text-[22px]">
                  favorite
                </span>
                <p className="text-sm font-semibold">My Favorites</p>
              </a>
              <a
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-charcoal transition-all"
                href="#"
                onClick={onClose}
              >
                <span className="material-symbols-outlined text-[22px]">
                  settings
                </span>
                <p className="text-sm font-semibold">Settings</p>
              </a>
            </div>

            {/* Top Navigation Links (visible on mobile) */}
            <div className="xl:hidden border-t border-slate-100 pt-4 mb-4">
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest px-4 mb-3">
                Quick Links
              </p>
              <div className="flex flex-col gap-1.5">
                <a
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-charcoal transition-all"
                  href="#"
                  onClick={onClose}
                >
                  <span className="material-symbols-outlined text-[20px]">
                    store
                  </span>
                  <p className="text-sm font-semibold">Marketplace</p>
                </a>
                <a
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-charcoal transition-all"
                  href="#"
                  onClick={onClose}
                >
                  <span className="material-symbols-outlined text-[20px]">
                    help
                  </span>
                  <p className="text-sm font-semibold">Help</p>
                </a>
                <a
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-charcoal transition-all"
                  href="#"
                  onClick={onClose}
                >
                  <span className="material-symbols-outlined text-[20px]">
                    support_agent
                  </span>
                  <p className="text-sm font-semibold">Support</p>
                </a>
              </div>
            </div>
          </nav>

          {/* Bottom CTA */}
          <div className="p-4 border-t border-slate-100">
            <div className="bg-primary/5 p-4 rounded-2xl border border-primary/10">
              <p className="text-[11px] text-charcoal/70 font-medium mb-3 leading-relaxed">
                Unlock priority delivery and exclusive marketplace deals.
              </p>
              <button className="w-full rounded-xl h-10 px-4 bg-primary text-white text-sm font-bold hover:bg-[#00a383] transition-all shadow-md shadow-primary/20">
                Upgrade to Pro
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
