import React from "react";
import {
  HiOutlineUser,
  HiOutlineArchiveBox,
  HiOutlineWallet,
  HiOutlineHeart,
  HiOutlineCog6Tooth,
  
} from "react-icons/hi2";

import {
  
  HiOutlineLogout,
  
} from "react-icons/hi";

const ProfileSidebar: React.FC = () => {
  return (
    <aside
      className="
        hidden lg:flex w-72 flex-col 
        bg-white p-6 border-r border-slate-100
        sticky top-0
        h-[calc(100vh)]
        shrink-0
      "
    >
      {/*  SCROLLABLE AREA (Profile + Nav) */}
      <div className="flex-1 min-h-0 overflow-y-auto pr-1">
        {/* Profile */}
        <div className="flex items-center gap-4 p-2 mb-6">
          <div
            className="bg-center bg-no-repeat bg-cover rounded-full size-12
            border-2 border-primary shadow-sm shrink-0"
            style={{
              backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBQmbU8DE3q2Io_Em_DYQombC7zJw8oXSmHsCcPhebOQchzAu6tkeEoAuWEmYSURe82gtJQdO9CEQQHmxnJGynYGzg7HRQSHP37fWbE_J4ckvnxcFdOM0Hpza2WAtZQYdSHieGxxLgx-aZIlN_Boi6lrsq4Bq0N7sGzzZ2zgAFWZlUpkpi3XeB0vsxWJgXNF9QxmlM0JtZOLuCb4pH0bFnjjXsVhO5wP76NFaKsTS1rWzsws9Fom7iFs_Pelh0K6fVzwJxp9DryhfWZ")`,
            }}
          />
          <div className="overflow-hidden">
            <h1 className="text-charcoal text-base font-bold truncate">
              Alex Johnson
            </h1>
            <p className="text-primary text-[10px] font-bold uppercase tracking-widest truncate">
              Premium Member
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-1.5">
          <SidebarLink
            active
            icon={<HiOutlineUser />}
            label="Account Profile"
          />
          <SidebarLink icon={<HiOutlineArchiveBox />} label="Order History" />
          <SidebarLink icon={<HiOutlineWallet />} label="Wallet & Payments" />
          <SidebarLink icon={<HiOutlineHeart />} label="My Favorites" />
          <SidebarLink icon={<HiOutlineCog6Tooth />} label="Settings" />

          {/*  extra items just to prove scrolling works */}
          <SidebarLink icon={<HiOutlineUser />} label="Security" />
          <SidebarLink icon={<HiOutlineUser />} label="Notifications" />
          <SidebarLink icon={<HiOutlineUser />} label="Addresses" />
        </nav>
      </div>

      {/*  FIXED BOTTOM CTA */}
      <div className="pt-4 shrink-0">
        <div className="bg-primary/5 p-5 rounded-2xl border border-primary/10">
          <p className="text-[11px] text-charcoal/70 font-medium mb-4 leading-relaxed">
            Unlock priority delivery and exclusive marketplace deals.
          </p>
          <button className="w-full h-10 rounded-xl bg-primary text-white text-sm font-bold hover:bg-[#00a383] transition-all shadow-md shadow-primary/20">
            Upgrade to Pro
          </button>
        </div>
      </div>
      <button
        onClick={() => {
         
          // logout logic
        }}
        className="flex items-center justify-center gap-3 w-full px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 transition"
      >
        <HiOutlineLogout className="text-xl" />
        <span className="text-sm font-semibold">Logout</span>
      </button>
    </aside>
  );
};

export default ProfileSidebar;

/* ---------------------------------- */

interface SidebarLinkProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({
  icon,
  label,
  active = false,
}) => (
  <a
    href="#"
    className={`
      flex items-center gap-3 px-4 py-3 rounded-xl transition-all
      ${
        active
          ? "bg-primary/10 text-primary font-bold"
          : "text-slate-500 hover:bg-slate-50 hover:text-charcoal font-semibold"
      }
    `}
  >
    <span className="text-xl shrink-0">{icon}</span>
    <span className="text-sm truncate">{label}</span>
  </a>
);
