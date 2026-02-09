

import {
 
  HiOutlineWallet,
  HiOutlineShoppingBag,
  
} from "react-icons/hi2";

import {
 
  MdTimer,
} from "react-icons/md";

const WalletBalance: React.FC = () => {
  return (
    <section className="xl:col-span-2 bg-white border border-slate-100 rounded-2xl shadow-soft p-6 md:p-8 relative overflow-hidden">
      <HiOutlineWallet className="absolute top-6 right-6 text-[120px] text-primary opacity-5 hidden sm:block" />

      <div>
        <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
          Total Balance
        </p>
        <h3 className="text-primary text-4xl md:text-4xl font-black mt-1">
          ₦12,450.00
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 pt-6 border-t border-slate-50">
        <BalanceItem
          icon={<MdTimer />}
          label="On-hold Funds"
          value="₦1,200.00"
          bg="bg-blue-50"
          color="text-blue-600"
        />

        <BalanceItem
          icon={<HiOutlineShoppingBag />}
          label="Total Spent"
          value="₦45,890.00"
          bg="bg-primary/10"
          color="text-primary"
        />
      </div>
    </section>
  );
};

const BalanceItem = ({ icon, label, value, bg, color }: any) => (
  <div className="flex items-center gap-3">
    <div
      className={`size-11 rounded-full ${bg} ${color} flex items-center justify-center`}
    >
      {icon}
    </div>
    <div>
      <p className="text-[11px] uppercase tracking-wider font-bold text-slate-500">
        {label}
      </p>
      <p className="text-xl font-bold text-slate-900">{value}</p>
    </div>
  </div>
);

export default WalletBalance;
