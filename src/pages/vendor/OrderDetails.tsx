import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useApi } from "@/hooks/useApi";

import OrderHeader from "@/components/vendor/orders/orderDetails/OrderHeader";
import DeliveryCard from "@/components/vendor/orders/orderDetails/DeliveryCard";
import CustomerCard from "@/components/vendor/orders/orderDetails/CustomerCard";
import ProductsCard from "@/components/vendor/orders/orderDetails/ProductsCard";
import OrderTimeline from "@/components/vendor/orders/orderDetails/OrderTimeline";
import UpdateOrderStatus from "@/components/vendor/orders/orderDetails/UpdateOrderStatus";

const API_URL = import.meta.env.VITE_API_URL;

export default function OrderDetails() {
  const { orderId } = useParams();

  const [order, setOrder] = useState<any>(null);

  const { get, loading } = useApi(`${API_URL}/vendor/orders/${orderId}`);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
          const response = await get();
          
          console.log(response)

        setOrder(response.order);
      } catch (err) {
        console.log(err);
      }
    };

    fetchOrder();
  }, []);

  

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      <OrderHeader
        orderNumber={order?.order_number}
        parentOrderNumber={order?.parent_order_number}
        createdAt={
          order?.created_at && new Date(order.created_at).toLocaleDateString()
        }
        status={order?.order_status}
      />
      <CustomerCard buyer={order?.buyer} />

      <DeliveryCard delivery={order?.delivery} />
      <ProductsCard products={order?.products} />
      <OrderTimeline currentStatus={order?.order_status} />
      <UpdateOrderStatus
        order={order}
        onUpdate={(status, note) => {
          console.log(status, note);

          // We'll replace this with the API call later
        }}
      />
    </div>
  );
}
