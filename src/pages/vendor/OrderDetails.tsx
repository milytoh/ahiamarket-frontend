const API_URL = import.meta.env.VITE_API_URL;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useApi } from "@/hooks/useApi";

import OrderHeader from "@/components/vendor/orders/orderDetails/OrderHeader";
import DeliveryCard from "@/components/vendor/orders/orderDetails/DeliveryCard";
import CustomerCard from "@/components/vendor/orders/orderDetails/CustomerCard";
import ProductsCard from "@/components/vendor/orders/orderDetails/ProductsCard";
import OrderTimeline from "@/components/vendor/orders/orderDetails/OrderTimeline";
import UpdateOrderStatus from "@/components/vendor/orders/orderDetails/UpdateOrderStatus";

import OrderHeaderSkeleton from "@/components/ui/skeletons/vendor/order/orderDetails/OrderHeaderSkeleton";
import CustomerCardSkeleton from "@/components/ui/skeletons/vendor/order/orderDetails/CustomerCardSkeleton";
import DeliveryCardSkeleton from "@/components/ui/skeletons/vendor/order/orderDetails/DeliveryCardSkeleton";
import ProductsCardSkeleton from "@/components/ui/skeletons/vendor/order/orderDetails/ProductsCardSkeleton";
import OrderTimelineSkeleton from "@/components/ui/skeletons/vendor/order/orderDetails/OrderTimelineSkeleton";
import UpdateOrderStatusSkeleton from "@/components/ui/skeletons/vendor/order/orderDetails/UpdateOrderStatusSkeleton";


import { toast } from "react-toastify";

export default function OrderDetails() {
  const { orderId } = useParams();
  const [order, setOrder] = useState<any>(null);
  const [urlChange, setUrlChange] = useState(false);

  const { get, loading, error} = useApi(`${API_URL}/vendor/orders/${orderId}`);
  const { patch, loading: updatingStatusLoading } = useApi(
    `${API_URL}/vendor/orders/${order?._id}/status`,
  );

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await get();
console.log(response.order);
        setOrder(response.order);
      } catch (err) {
        console.log(err);
      }
    };

    fetchOrder();
  }, [urlChange]);

  const handleUpdateStatus = async (status: string, note: string) => {
    try {
      await patch({
        status,
        note,
      });

      toast.success("Order updated");

      setUrlChange(!urlChange);
    } catch (err) {
      toast.error("Unable to update order");
    }
  };

  useEffect(() => {
      if (error) {
        toast.error(
          `${ "something went wrong, check your network connection"}`,
        );
      }
    }, [error]);

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {loading ? (
        <OrderHeaderSkeleton />
      ) : (
        <OrderHeader
          orderNumber={order?.order_number}
          parentOrderNumber={order?.parent_order_number}
          createdAt={
            order?.created_at && new Date(order.created_at).toLocaleDateString()
          }
          status={order?.order_status}
        />
      )}

      {loading ? (
        <CustomerCardSkeleton />
      ) : (
        <CustomerCard buyer={order?.buyer} />
      )}

      {loading ? (
        <DeliveryCardSkeleton />
      ) : (
        <DeliveryCard delivery={order?.delivery} />
      )}

      {loading ? (
        <ProductsCardSkeleton />
      ) : (
        <ProductsCard products={order?.products} />
      )}


      {loading ? (
        <OrderTimelineSkeleton />
      ) : (
        <OrderTimeline
          currentStatus={order?.order_status}
          history={order?.status_history || []}
        />
      )}

      {loading ? (
        <UpdateOrderStatusSkeleton />
      ) : (
        <UpdateOrderStatus
          order={order}
          loading={updatingStatusLoading}
          onUpdate={handleUpdateStatus}
        />
      )}
    </div>
  );
}
