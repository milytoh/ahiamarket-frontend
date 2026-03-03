import { useEffect, useState} from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useApi } from "@/hooks/useApi";
import Spinner from "@/components/ui/Spinner";

import { toast } from "react-toastify";


const PaymentVerify = () => {
  const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [url, setUri] = useState("")

  const reference = searchParams.get("reference");

  const { get, loading, error } = useApi(
     `http://localhost:3000/api/paystack/callback?reference=${reference}`
      
  );

  useEffect(() => {
    const verifyPayment = async () => {
      const reference = searchParams.get("reference");
      
   setUri(reference!);
      if (!reference) {
        navigate("/profile/wallet");
        return;
      }
            
      try {
       const response = await get();
       toast.success("payment successful")
        // After verification
        navigate("/profile/wallet");
      } catch (error) {
        navigate("/profile/wallet");
      }
    };

    verifyPayment();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="text-primary text-lg font-semibold">Verifying payment...</p>
      <Spinner/>
    </div>
  );
};

export default PaymentVerify;
