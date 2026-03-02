import { useEffect, useState } from "react";
import { useApi } from "@/hooks/useApi";
import debounce from "lodash.debounce";

import { MdVerified } from "react-icons/md";

interface AddAccountFormProps {
  onSuccess: () => void;
}

const AddAccountForm: React.FC<AddAccountFormProps> = ({ onSuccess }) => {
  const [banks, setBanks] = useState<any[]>([]);
  const [bankCode, setBankCode] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [accountName, setAccountName] = useState("");
  const [loadinng, setLoading] = useState(false);
  const [verifying, setVerifying] = useState(false);

  //using custom hook
  const {
    get,
    loading: getLoading,
    error: getError,
  } = useApi("http://localhost:3000/api/payment/banks");

  //using custom hook for account resoler
  const { post, loading, error } = useApi(
    "http://localhost:3000/api/payment/get-payout-details",
  );

  //using custom hook for account setup
  const {
    post: postSetAcct,
    loading: setAcctLoading,
    error: setAcctError,
  } = useApi("http://localhost:3000/api/payment/set-payout-details");

  //  Fetch real banks/resolver 
  useEffect(() => {
    const fetchBanks = async () => {
      const res = await get();
      setBanks(res?.banks);
    };
    fetchBanks();
  }, []);

  // Auto verify when account number = 10 digits
  useEffect(() => {
    const verifyAccount = debounce( async () => {
      if (accountNumber.length !== 10 || !bankCode) return;

      try {
        setVerifying(true);

        const res = await post({
          accountNumber,
          bankCode,
        });

        setAccountName(res.accountName);
      } catch {
        setAccountName("");
      } finally {
        setVerifying(false);
      }
    }, 800);

    verifyAccount();
  }, [accountNumber, bankCode]);

  //to submit and save it on db
  const handleSubmit = async () => {
    if (!accountName) return;

    try {
      setLoading(true);

      await postSetAcct( {
        accountNumber,
        bankCode,
      });

      onSuccess();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Bank Select */}
      <div className="space-y-2">
        <label className="text-sm font-semibold">Select Bank</label>

        <select
          value={bankCode}
          onChange={(e) => setBankCode(e.target.value)}
          className="w-full h-12 px-4 border border-slate-200 rounded-xl focus:border-primary outline-none"
        >
          {getLoading ? (
            <option value="">loading...</option>
          ) : (
            <option value="">Select Bank</option>
          )}
          {banks?.map((bank) => (
            <option key={bank.code + Math.random()} value={bank.code}>
              {bank.name}
            </option>
          ))}
        </select>
      </div>

      {/* Account Number */}
      <div className="space-y-2">
        <label className="text-sm font-semibold">Account Number</label>

        <input
          type="number"
          maxLength={10}
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value.slice(0, 10))}
          className="w-full h-12 px-4 border border-slate-200 rounded-xl focus:border-primary outline-none"
          placeholder="Enter 10-digit account number"
        />
      </div>

      {/* Account Name (Auto Resolved) */}
      <div className="space-y-2">
        <label className="text-sm font-semibold">Account Name</label>

        <div className="w-full h-12 px-4 border border-slate-200 rounded-xl flex items-center justify-between bg-slate-50">
          {verifying ? (
            <span className="text-sm text-slate-400">Verifying...</span>
          ) : accountName ? (
            <>
              <span className="font-semibold text-sm">{accountName}</span>
              <MdVerified className="text-green-500" />
            </>
          ) : (
            <span className="text-sm text-slate-400">
              Account name will appear here
            </span>
          )}
        </div>
      </div>

      {/* CTA */}
      <button
        disabled={!accountName || loading}
        onClick={handleSubmit}
        className="w-full h-14 bg-primary text-white font-bold rounded-xl disabled:opacity-50"
      >
        {loading ? "Saving..." : "Save Account"}
      </button>
    </div>
  );
};

export default AddAccountForm;
