import React, { useState } from "react";
import {
  Wallet,
  Smartphone,
  Landmark,
  CreditCard,
  CheckCircle,
  ArrowRight,
  Lock,
  ShieldCheck,
} from "lucide-react";

interface Props {
  onClose: () => void;
}

type PaymentMethod = "opay" | "palmpay" | "bank" | "card";

const DepositForm: React.FC<Props> = ({ onClose }) => {
  const [amount, setAmount] = useState<number>(5000);
  const [method, setMethod] = useState<PaymentMethod>("opay");

  const formatCurrency = (value: number) => {
    return value.toLocaleString("en-NG");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({
      amount,
      method,
    });

    // integrate Paystack here later

    onClose();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="px-6 sm:px-10 pb-10 flex flex-col gap-8"
    >
      {/* Amount */}
      <div className="flex flex-col gap-2">
        <label className="flex flex-col w-full">
          <p className="text-charcoal text-sm font-bold leading-normal pb-2">
            Amount to Deposit
          </p>

          <div className="relative group">
            <span className="absolute left-5 top-1/2 -translate-y-1/2 text-2xl font-extrabold text-primary">
              ₦
            </span>

            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="flex w-full rounded-xl text-charcoal focus:outline-0 
                         focus:ring-2 focus:ring-primary/40 focus:border-primary 
                         border border-slate-200 bg-slate-50/50 h-16 
                         pl-12 pr-6 text-2xl font-extrabold transition-all"
              placeholder="0.00"
              required
            />
          </div>
        </label>
      </div>

      {/* Payment Methods */}
      <div>
        <h3 className="text-charcoal text-lg font-bold leading-tight tracking-[-0.015em] pb-4">
          Select Payment Method
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Opay */}
          <button
            type="button"
            onClick={() => setMethod("opay")}
            className={`flex flex-col items-start p-4 rounded-xl transition-all text-left ${
              method === "opay"
                ? "border-2 border-primary bg-primary/[0.03] ring-2 ring-primary/5"
                : "border border-slate-200 hover:border-primary/40 hover:bg-slate-50"
            }`}
          >
            <div className="flex justify-between w-full mb-3">
              <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm border border-slate-100">
                <Wallet className="text-primary" size={24} />
              </div>

              {method === "opay" && (
                <CheckCircle className="text-primary" size={20} />
              )}
            </div>

            <span className="font-bold text-charcoal text-sm sm:text-base">
              Opay
            </span>
            <span className="text-[11px] sm:text-xs text-slate-500">
              Instant Wallet Transfer
            </span>
          </button>

          {/* PalmPay */}
          <button
            type="button"
            onClick={() => setMethod("palmpay")}
            className={`flex flex-col items-start p-4 rounded-xl transition-all text-left ${
              method === "palmpay"
                ? "border-2 border-primary bg-primary/[0.03]"
                : "border border-slate-200 hover:border-primary/40 hover:bg-slate-50"
            }`}
          >
            <div className="flex justify-between w-full mb-3">
              <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center">
                <Smartphone size={24} />
              </div>

              {method === "palmpay" && (
                <CheckCircle className="text-primary" size={20} />
              )}
            </div>

            <span className="font-bold text-charcoal text-sm sm:text-base">
              PalmPay
            </span>
            <span className="text-[11px] sm:text-xs text-slate-500">
              Pay via PalmPay App
            </span>
          </button>

          {/* Bank */}
          <button
            type="button"
            onClick={() => setMethod("bank")}
            className={`flex flex-col items-start p-4 rounded-xl transition-all text-left ${
              method === "bank"
                ? "border-2 border-primary bg-primary/[0.03]"
                : "border border-slate-200 hover:border-primary/40 hover:bg-slate-50"
            }`}
          >
            <div className="flex justify-between w-full mb-3">
              <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center">
                <Landmark size={24} />
              </div>

              {method === "bank" && (
                <CheckCircle className="text-primary" size={20} />
              )}
            </div>

            <span className="font-bold text-charcoal text-sm sm:text-base">
              Bank Transfer
            </span>
            <span className="text-[11px] sm:text-xs text-slate-500">
              Manual Account Transfer
            </span>
          </button>

          {/* Card */}
          <button
            type="button"
            onClick={() => setMethod("card")}
            className={`flex flex-col items-start p-4 rounded-xl transition-all text-left ${
              method === "card"
                ? "border-2 border-primary bg-primary/[0.03]"
                : "border border-slate-200 hover:border-primary/40 hover:bg-slate-50"
            }`}
          >
            <div className="flex justify-between w-full mb-3">
              <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center">
                <CreditCard size={24} />
              </div>

              {method === "card" && (
                <CheckCircle className="text-primary" size={20} />
              )}
            </div>

            <span className="font-bold text-charcoal text-sm sm:text-base">
              Debit Card
            </span>
            <span className="text-[11px] sm:text-xs text-slate-500">
              Visa / Mastercard / Verve
            </span>
          </button>
        </div>
      </div>

      {/* Submit */}
      <div className="flex flex-col gap-6">
        <button
          type="submit"
          className="w-full bg-primary hover:bg-[#00a382] 
                     active:scale-[0.98] text-white py-4 rounded-xl 
                     font-bold text-base sm:text-lg shadow-xl 
                     shadow-primary/20 transition-all flex items-center 
                     justify-center gap-3"
        >
          <span>Proceed to Pay ₦{formatCurrency(amount)}</span>
          <ArrowRight size={20} />
        </button>

        {/* Security Info */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 opacity-50">
          <div className="flex items-center gap-1.5 text-charcoal">
            <Lock size={16} />
            <span className="text-[10px] font-bold uppercase tracking-widest">
              Secured by SSL
            </span>
          </div>

          <div className="hidden sm:block w-px h-3 bg-slate-300"></div>

          <div className="flex items-center gap-1.5 text-charcoal">
            <ShieldCheck size={16} />
            <span className="text-[10px] font-bold uppercase tracking-widest">
              PCI-DSS Compliant
            </span>
          </div>
        </div>
      </div>
    </form>
  );
};

export default DepositForm;
