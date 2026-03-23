import TransactionRow from "./TransactionRow";


import { Transaction } from "./TransactionRow";

interface Prop {
  transactions: Transaction[];
  onClick: (id: any) => void
}


export default function TransactionTable({transactions, onClick}: Prop) {

  const handlerTrans = (id: any) => {
    
    onClick(id)
    
  }

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
      <div className="w-full overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="px-4 md:px-6 py-4 text-xs font-bold text-slate-500 uppercase">
                Date
              </th>

              <th className="px-4 md:px-6 py-4 text-xs font-bold text-slate-500 uppercase">
                Description
              </th>

              <th className="hidden md:table-cell px-6 py-4 text-xs font-bold text-slate-500 uppercase">
                Method
              </th>

              <th className="px-4 md:px-6 py-4 text-xs font-bold text-slate-500 uppercase">
                Amount
              </th>

              <th className="px-4 md:px-6 py-4 text-xs font-bold text-slate-500 uppercase">
                Status
              </th>

              <th className="hidden sm:table-cell px-6 py-4 text-xs font-bold text-slate-500 uppercase text-right">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {transactions?.map((tx, i) => (
              <TransactionRow key={i} tx={tx} onclick={handlerTrans.bind(null, tx.id)!}/>
            ))}
          </tbody>
          
        </table>
      </div>
    </div>
  );
}


 