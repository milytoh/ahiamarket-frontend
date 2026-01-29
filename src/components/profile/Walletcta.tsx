import React from "react";

const WalletCTA: React.FC = () => {
  return (
    <section className="bg-white rounded-2xl border-2 border-dashed border-primary/20 p-8 md:p-12 lg:p-16 text-center shadow-sm">
      <div className="max-w-md mx-auto flex flex-col items-center">
        <div className="size-16 md:size-20 bg-primary/5 rounded-full flex items-center justify-center text-primary mb-6 ring-8 ring-primary/5">
          <span className="material-symbols-outlined text-[32px] md:text-[40px]">
            account_balance
          </span>
        </div>
        <h3 className="text-charcoal text-xl md:text-2xl font-extrabold mb-3">
          Connect Your Wallet
        </h3>
        <p className="text-charcoal/60 text-sm md:text-base font-medium mb-8 leading-relaxed">
          Securely link your payment methods for faster, seamless transactions
          across the marketplace.
        </p>
        <button className="w-full sm:w-auto bg-primary text-white px-10 py-4 rounded-xl font-bold hover:bg-[#00a383] transition-all transform active:scale-95 shadow-xl shadow-primary/20">
          Get Started with Wallet
        </button>
      </div>
    </section>
  );
};

export default WalletCTA;
