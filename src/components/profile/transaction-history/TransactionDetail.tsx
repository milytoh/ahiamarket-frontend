interface Transaction {
  id: string;
  type: "deposit" | "withdrawal" | "purchase";
  amount: string;
  status: "Success" | "Pending" | "Failed";
  reference: string;
  date: string;
  createdAt  : string;
  method?: string;
  channel?: string;
  userEmail?: string;
}

interface TransactionDetailContentProps {
  tx: Transaction | null;
}

export default function TransactionDetail({
  tx,
}: TransactionDetailContentProps) {

const formatTxDate = (isoString :any) => {
  const date = new Date(isoString);

  const datePart = new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date); // → "16 Mar 2026"


  const timePart = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(date); // → "11:06 AM"

  return { date: datePart, time: timePart };
  };
  

  const { date, time } = formatTxDate(tx?.createdAt);

  return (
    <div className="p-6 max-h-[80vh] overflow-y-auto">
      {/* HEADER */}
      <h2 className="text-xl font-bold text-slate-900 mb-4">
        {tx?.type === "withdrawal" ? "Withdrawal" : "Deposit"} Details
      </h2>

      {/* DETAILS */}
      <div className="space-y-4">
        {/* Amount */}
        <div>
          <p className="text-xs text-slate-500 uppercase">Amount</p>
          <p
            className={`text-lg font-bold ${
              tx?.type === 'deposit' ? "text-primary" : "text-charcoal"
            }`}
          >
            {tx?.amount}
          </p>
        </div>

        {/* Status */}
        <div>
          <p className="text-xs text-slate-500 uppercase">Status</p>
          <span
            className={`inline-block mt-1 px-2 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wide ${
              tx?.status === "Success"
                ? "bg-emerald-50 text-emerald-600"
                : tx?.status === "Pending"
                  ? "bg-amber-50 text-amber-600"
                  : "bg-rose-50 text-rose-600"
            }`}
          >
            {tx?.status}
          </span>
        </div>

        {/* Reference */}
        <div>
          <p className="text-xs text-slate-500 uppercase">Reference</p>
          <p className="text-sm font-mono text-slate-700 break-all">
            {tx?.reference}
          </p>
        </div>

        {/* Date */}
        <div>
          <p className="text-xs text-slate-500 uppercase">Date</p>
          <p className="text-sm text-slate-700">
            {date} • {time}
          </p>
        </div>

        {/* Method */}
        <div>
          <p className="text-xs text-slate-500 uppercase">Method</p>
          <p className="text-sm text-slate-700">
            {tx?.method || tx?.channel || "N/A"}
          </p>
        </div>

        {/* Email */}
        {tx?.userEmail && (
          <div>
            <p className="text-xs text-slate-500 uppercase">Customer Email</p>
            <p className="text-sm text-slate-700">{tx.userEmail}</p>
          </div>
        )}
      </div>

      {/* ACTIONS */}
      <div className="mt-6 flex gap-3">
        <button className="flex-1 px-4 py-2 rounded-xl bg-primary text-white font-semibold hover:bg-primary-dark transition">
          Download Receipt
        </button>

        <button className="flex-1 px-4 py-2 rounded-xl bg-rose-50 text-rose-600 font-semibold hover:bg-rose-100 transition">
          Report Issue
        </button>
      </div>
    </div>
  );
}
