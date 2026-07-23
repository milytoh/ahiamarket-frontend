import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

import { useApi } from "@/hooks/useApi";

import InvoiceHeader from "@/components/vendor/orders/invoice/InvoiceHeader";
import InvoiceParties from "@/components/vendor/orders/invoice/InvoiceParties";
import InvoiceProducts from "@/components/vendor/orders/invoice/InvoiceProducts";

export default function Invoice() {
  const { id } = useParams();

 

  const [invoice, setInvoice] = useState<any>(null);

  const { get, loading } = useApi(`${API_URL}/vendor/orders/${id}`);

  const fetchInvoice = async () => {
    try {
      const response = await get();

      setInvoice(response.order);
      console.log(response.order);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchInvoice();
  }, []);

 

 

  return (
    <div className="min-h-screen bg-[#f6f8fb] py-10">
      <div className="max-w-5xl mx-auto">
        <InvoiceHeader invoice={invoice} />
        <InvoiceParties invoice={invoice} />
        <InvoiceProducts products={invoice.products} />
      </div>
    </div>
  );
}
