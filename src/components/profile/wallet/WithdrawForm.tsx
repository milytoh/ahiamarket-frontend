import AddAccountForm from "./AddAccountForm";
import Modal from "@/components/ui/Modal";

import { useMemo, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { MdVerifiedUser } from "react-icons/md";
import { HiArrowRight } from "react-icons/hi";

interface WithdrawFormProps {
  balance: number;
  onClose: () => void;
  bankAccounts: any[]
}

const WithdrawForm: React.FC<WithdrawFormProps> = ({ balance, onClose, bankAccounts }) => {

  
  const [amount, setAmount] = useState<string>("");
  const [showAddAccount, setShowAddAccount] = useState(false);

  const [selectedAccountId, setSelectedAccountId] = useState<string | null>(
    bankAccounts?.find((acc) => acc.isDefault)?._id || null,
  );

  


  const feePercent = 1;

  const fee = useMemo(() => {
    if (!amount) return 0;
    return (Number(amount) * feePercent) / 100;
  }, [amount]);

  const total = useMemo(() => {
    if (!amount) return 0;
    return Number(amount) + fee;
  }, [amount, fee]);

  const handleWithdraw = () => {
    if (!amount || Number(amount) <= 0) return;
    if (Number(amount) > balance) return;

    console.log("Withdraw:", amount);

    onClose();
  };

  return (
    <>
      <Modal
        isOpen={showAddAccount}
        onClose={() => setShowAddAccount(false)}
        title="Set withdraw account"
        subtitle="Transfer funds securely to your bank account."
      >
        {showAddAccount && (
          <AddAccountForm
            onSuccess={() => {
              setShowAddAccount(false);
              // refetch payout details
            }}
          />
        )}
      </Modal>
      <div className="space-y-8">
       
        <div className="space-y-3">
          <p className="text-xs font-bold uppercase text-slate-400">
            Saved Accounts
          </p>

          {bankAccounts.length === 0 ? (
            <div className="text-sm text-slate-400 p-4 border rounded-xl">
              No save bank account
            </div>
          ) : (
            bankAccounts.map((acct) => {
              const isSelected = selectedAccountId === acct._id;

              return (
                <div
                  key={acct._id}
                  onClick={() => setSelectedAccountId(acct._id)}
                  className={`
            p-4 rounded-xl border cursor-pointer transition
            flex items-center justify-between
            ${
              isSelected
                ? "border-primary bg-primary/5"
                : "border-slate-200 hover:border-primary"
            }
          `}
                >
                  <div>
                    <p className="font-semibold text-sm">{acct.accountName}</p>
                    <p className="text-xs text-slate-500">
                      **** {acct.accountNumber.slice(-4)}
                    </p>
                  </div>

                  {isSelected && (
                    <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                  )}
                </div>
              );
            })
          )}
          <button
            onClick={() => setShowAddAccount(true)}
            className="w-full flex flex-col items-center justify-center py-6 border-2 border-dashed border-slate-200 rounded-xl hover:border-primary transition bg-slate-50"
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
              <FiPlus className="text-primary" size={20} />
            </div>
            <p className="text-sm font-semibold">Add New Account</p>
          </button>
        </div>

        {/* Amount */}
        <div className="space-y-3">
          <div className="flex justify-between text-xs text-slate-500">
            <span className="uppercase font-bold text-slate-400">Amount</span>
            <span>
              Bal:{" "}
              <span className="text-primary font-bold">
                ₦{balance.toLocaleString()}
              </span>
            </span>
          </div>

          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-bold text-slate-400">
              ₦
            </span>

            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              className="w-full h-16 pl-10 pr-20 border border-slate-200 rounded-xl text-2xl font-bold focus:border-primary focus:outline-none"
            />

            <button
              onClick={() => setAmount(balance.toString())}
              className="absolute right-3 top-1/2 -translate-y-1/2 px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-lg hover:bg-primary hover:text-white transition"
            >
              MAX
            </button>
          </div>

          {Number(amount) > balance && (
            <p className="text-red-500 text-xs">Insufficient balance</p>
          )}
        </div>

        {/* Transaction Summary */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-slate-500">Withdrawal</span>
            <span className="font-semibold">
              ₦{Number(amount || 0).toLocaleString()}
            </span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-slate-500">Fee (1%)</span>
            <span className="font-semibold">₦{fee.toLocaleString()}</span>
          </div>

          <div className="pt-3 border-t border-slate-200 flex justify-between font-bold">
            <span>Total Deducted</span>
            <span className="text-primary">₦{total.toLocaleString()}</span>
          </div>
        </div>

        {/* Security Info */}
        <div className="flex items-center gap-2 text-xs text-slate-400 uppercase tracking-wide">
          <MdVerifiedUser className="text-primary" />
          Secure processing
        </div>

        {/* CTA Button */}
        <button
          onClick={handleWithdraw}
          disabled={!amount || Number(amount) <= 0 || Number(amount) > balance || bankAccounts.length <= 0}
          className="w-full h-14 bg-accent-orange text-white font-bold rounded-xl shadow-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center justify-center gap-2"
        >
          Withdraw Now
          <HiArrowRight />
        </button>
      </div>
    </>
  );
};

export default WithdrawForm;
