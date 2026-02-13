import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "@/lib/axios";

const PaymentVerify = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const verifyPayment = async () => {
      const reference = searchParams.get("reference");

      if (!reference) {
        navigate("/profile/wallet");
        return;
      }

      try {
        await axios.get(`/paystack/callback?reference=${reference}`);

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
      <p className="text-lg font-semibold">Verifying payment...</p>
    </div>
  );
};

export default PaymentVerify;
