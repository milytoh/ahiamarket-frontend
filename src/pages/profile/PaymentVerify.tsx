import { useEffect, useState} from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useApi } from "@/hooks/useApi";


const PaymentVerify = () => {
  const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [url, setUri] = useState("")

    //using custom hook
     const { get, loading, error } = useApi(
      
     ); 

  useEffect(() => {
    const verifyPayment = async () => {
      const reference = searchParams.get("reference");
      console.log(reference, "referrrrrr")
   setUri(reference!);
      if (!reference) {
        navigate("/profile/wallet");
        return;
      }
            
      try {
        await get();

        // After verification
        navigate("/profile/wallet");
      } catch (error) {
        navigate("/profile/wallet");
      }
    };

    verifyPayment();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-primary text-lg font-semibold">Verifying payment...</p>
    </div>
  );
};

export default PaymentVerify;
