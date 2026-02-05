const WalletTransactions = () => {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
      <div className="px-6 py-5 border-b flex justify-between items-center">
        <h3 className="text-xl font-bold">Recent Activities</h3>
        <button className="text-primary font-bold text-sm">View All</button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-4 text-left text-xs uppercase text-slate-500">
                Date
              </th>
              <th className="px-6 py-4 text-left text-xs uppercase text-slate-500">
                Description
              </th>
              <th className="px-6 py-4 text-right text-xs uppercase text-slate-500">
                Amount
              </th>
            </tr>
          </thead>
          <tbody className="divide-y">
            <tr>
              <td className="px-6 py-4">Oct 24, 2023</td>
              <td className="px-6 py-4">Wallet Top-up</td>
              <td className="px-6 py-4 text-right text-primary font-bold">
                +$2,500
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WalletTransactions;
