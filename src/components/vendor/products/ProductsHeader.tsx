import { useNavigate} from "react-router-dom"
import { MdAddCircle } from 'react-icons/md';

export default function ProductsHeader() {
  const navigate = useNavigate();
  
  const addproductPageHandler = () => {
    navigate("/vendor/dashboard/add-product");
  }

  return (
    <div className="flex flex-col md:flex-row justify-between items-end mb-10">
      <div>
        <h2 className="text-5xl font-extrabold tracking-tighter text-text-main">
          Inventory Ledger
        </h2>
        <p className="text-slate-600 max-w-md mt-2">
          Curate and manage your premium product catalog with high-precision
          controls and real-time stock analytics.
        </p>
      </div>

      <button
        onClick={addproductPageHandler}
        className="mt-6 md:mt-0 flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl active:scale-95 transition-all"
      >
        <MdAddCircle size={28} />
        Add New Product
      </button>
    </div>
  );
}