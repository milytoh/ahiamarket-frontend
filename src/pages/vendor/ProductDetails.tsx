const API_URL = import.meta.env.VITE_API_URL;
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useApi } from "@/hooks/useApi";
import { toast } from "react-toastify";
import Modal from "@/components/ui/Modal";

import ProductDetails from "@/components/vendor/products/ProductDetails";
import { number } from "zod";

import ProductDetailsSkeleton from "@/components/ui/skeletons/vendor/products/ProductDetailsSkeleton";
import ErrorState from "@/components/ui/Error";

interface Product {
  id: string;
  name: string;
  sku: string;
  description: string;
  category: string;
  condition: string;
  images: any[];
  price: number;
  stock: number;
  status: string;
  pod: boolean;
  visible: boolean;
  createdAt: string;

  sales:number;
  revenue: number;
  views: number;
}

export default function ProductDetail() {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isProductCloneModalOpen, setProductCloneModalOpe] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(
    null,
  );
  const [product, setProduct] = useState<Product>();

  const navigate = useNavigate();
  const { id } = useParams();

  const { get, loading, error } = useApi(`${API_URL}/vendor/product/${id}`);

  //API hooks for delete product
  const {
    del,
    loading: delLoading,
    error: delError,
  } = useApi(`${API_URL}/product/${selectedProductId}/delete`);

  //handle edit product - needs to be moved to ProductRow and lifted up
  const handleEditProdcut = (id: string) => {
    console.log(id);
    navigate(`/vendor/dashboard/edit-product/${id}`);
  };

  //API hooks for clone product
  const {
    post,
    loading: cloneLoading,
    error: cloneError,
  } = useApi(`${API_URL}/vendor/product/clone`);

  // API hook for toggling visibility
  const {
    patch: visibilityPatch,
    loading: visibilityLoading,
    error: visibilityError,
  } = useApi(`${API_URL}/vendor/product/visible/update`);
  

  // API hooks for updating product pod status
  const {
    patch,
    loading: podLoading,
    error: podError,
  } = useApi(`${API_URL}/vendor/product/pod/update`);

  //handle delete product - needs to be moved to ProductRow and lifted up
  const handleDeleteProduct = async (id: string) => {
    setIsDeleteModalOpen(true);
    setSelectedProductId(id);
  };

  const handleConfirmDelete = async () => {
    try {
      const res = await del();
      setIsDeleteModalOpen(false);
      toast.success("Product deleted successfully");
      navigate("/vendor/dashboard/products");
    } catch (error: any) {
      toast.error("product deletion failed", error.message);
    }
  };

  //handle clone product - needs to be moved to ProductRow and lifted up
  const handleProductClone = async (id: string) => {
    setSelectedProductId(id);
    setProductCloneModalOpe(true);
  };

  const handleConfirmClone = async () => {
    try {
      await post({
        productId: selectedProductId,
      });
      // get()
      toast.success("Product cloned successfully. check your drafts!!!");
      setProductCloneModalOpe(false);
    } catch (error: any) {
      toast.error("product cloning failed", error.message);
    }
  };

  //for visibility toggle - needs to be moved to ProductRow and lifted up
  const handleVisibilityToggle = async (productId: string, value: boolean) => {
    
    try {
      // optimistic UI update
      
      setProduct((prev) =>
        (prev?.id === productId ? { ...prev, visible: value }: prev),
      );
      // send to backend
      await visibilityPatch({
        visible: value,
        id: productId,
      });
    } catch (err) {
      //rollback if failed
      setProduct((prev) =>
        (prev?.id === productId ? { ...prev, visible: !value }: prev),
      );
      toast.error("operation failed, check your network connection");
    }
  
  }
  //for POD toggle - needs to be moved to ProductRow and lifted up
 

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const data = await get();

        console.log(data);

        const productId = data.product?._id;

        const prod = {
          id: productId,
          name: data.product?.name,
          sku: productId?.slice(-6).toUpperCase(),
          images: data.product?.images || [],
          price: data.product?.price,
          stock: data.product?.stock,
          status: data.product?.status,
          pod: data.product?.pod,
          visible: data.product?.visible,
          description: data.product?.description,
          category: data.product?.category,
          condition: data.product?.condition,

          createdAt: new Date(data.product?.created_at).toLocaleDateString(
            "en-US",
            {
              month: "short",
              day: "numeric",
              year: "numeric",
            },
          ),

          sales: 43,
          revenue: 43000,
          views: 4300,
        };

        setProduct(prod);
      } catch (err) {}
    };

    fetchDashboard();
  }, []);

  useEffect(() => {
    if (error) {
      toast.error("something went wrong, check your network connection!!!");
    }
  }, [error]);

  if (error) {
    return (
      <ErrorState
        title="Failed to load products"
        message={error.message}
        onRetry={get}
      />
    );
  }

  return (
    <div className="bg-background-light min-h-screen p-6 md:p-10 max-w-7xl mx-auto">
      {/* delete modal */}
      <Modal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        title="Delete Product"
        subtitle="Are you sure you want to delete this product?"
      >
        <div className="flex items-center justify-end gap-3 pt-2">
          <button
            type="button"
            onClick={() => setIsDeleteModalOpen(false)}
            className="px-5 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition-all"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={handleConfirmDelete}
            disabled={delLoading}
            className="px-5 py-3 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-semibold transition-all disabled:opacity-60"
          >
            {delLoading ? "Deleting..." : "Delete Product"}
          </button>
        </div>
      </Modal>
      {/* clone product modal */}
      <Modal
        isOpen={isProductCloneModalOpen}
        onClose={() => setProductCloneModalOpe(false)}
        title="Clone Product"
        subtitle="Are you sure you want to clone this product?"
      >
        <div className="flex items-center justify-end gap-3 pt-2">
          <button
            type="button"
            onClick={() => setProductCloneModalOpe(false)}
            className="px-5 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition-all"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={handleConfirmClone}
            disabled={cloneLoading}
            className="px-5 py-3 rounded-2xl  bg-primary  text-white font-semibold  disabled:opacity-60 hover:shadow-xl active:scale-95 transition-all"
          >
            {cloneLoading ? "Cloning..." : "Clone Product"}
          </button>
        </div>
      </Modal>

      {loading && <ProductDetailsSkeleton />}
      {!loading && product && (
        <ProductDetails
          onDeleteProduct={handleDeleteProduct}
          onCloneProduct={handleProductClone}
          onEditProduct={handleEditProdcut}
          product={product!}
        />
      )}
    </div>
  );
}
