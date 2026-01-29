import React from "react";

const Sidebar: React.FC = () => {
  return (
    <aside className="hidden lg:flex w-72 flex-col justify-between bg-white p-6 border-r border-slate-100 sticky top-[76px] h-[calc(100vh-76px)] shrink-0">
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-4 p-2">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12 border-2 border-primary shadow-sm shrink-0"
            style={{
              backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBQmbU8DE3q2Io_Em_DYQombC7zJw8oXSmHsCcPhebOQchzAu6tkeEoAuWEmYSURe82gtJQdO9CEQQHmxnJGynYGzg7HRQSHP37fWbE_J4ckvnxcFdOM0Hpza2WAtZQYdSHieGxxLgx-aZIlN_Boi6lrsq4Bq0N7sGzzZ2zgAFWZlUpkpi3XeB0vsxWJgXNF9QxmlM0JtZOLuCb4pH0bFnjjXsVhO5wP76NFaKsTS1rWzsws9Fom7iFs_Pelh0K6fVzwJxp9DryhfWZ")`,
            }}
          />
          <div className="flex flex-col overflow-hidden">
            <h1 className="text-charcoal text-base font-bold leading-none mb-1 truncate">
              Alex Johnson
            </h1>
            <p className="text-primary text-[10px] font-bold uppercase tracking-widest truncate">
              Premium Member
            </p>
          </div>
        </div>

        <nav className="flex flex-col gap-1.5">
          <a
            className="flex items-center gap-3 px-4 py-3 rounded-xl sidebar-link-active transition-all group"
            href="#"
          >
            <span className="material-symbols-outlined text-[22px] fill-[1]">
              person
            </span>
            <p className="text-sm font-bold">Account Profile</p>
          </a>
          <a
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-charcoal transition-all group"
            href="#"
          >
            <span className="material-symbols-outlined text-[22px]">
              package
            </span>
            <p className="text-sm font-semibold">Order History</p>
          </a>
          <a
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-charcoal transition-all group"
            href="#"
          >
            <span className="material-symbols-outlined text-[22px]">
              account_balance_wallet
            </span>
            <p className="text-sm font-semibold">Wallet &amp; Payments</p>
          </a>
          <a
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-charcoal transition-all group"
            href="#"
          >
            <span className="material-symbols-outlined text-[22px]">
              favorite
            </span>
            <p className="text-sm font-semibold">My Favorites</p>
          </a>
          <a
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-charcoal transition-all group"
            href="#"
          >
            <span className="material-symbols-outlined text-[22px]">
              settings
            </span>
            <p className="text-sm font-semibold">Settings</p>
          </a>
        </nav>
      </div>

      <div className="bg-primary/5 p-5 rounded-2xl border border-primary/10">
        <p className="text-[11px] text-charcoal/70 font-medium mb-4 leading-relaxed">
          Unlock priority delivery and exclusive marketplace deals.
        </p>
        <button className="w-full cursor-pointer items-center justify-center rounded-xl h-10 px-4 bg-primary text-white text-sm font-bold hover:bg-[#00a383] transition-all shadow-md shadow-primary/20">
          Upgrade to Pro
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
