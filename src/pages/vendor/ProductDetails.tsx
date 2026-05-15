const API_URL = import.meta.env.VITE_API_URL;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApi } from "@/hooks/useApi";
import { toast } from "react-toastify";
import Modal from "@/components/ui/Modal";

import ProductDetails from "@/components/vendor/products/ProductDetails";

export default function ProductDetail() {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isProductCloneModalOpen, setProductCloneModalOpe] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(
    null,
  );

  const navigate = useNavigate();

  //API hooks for delete product
  const {
    del,
    loading: delLoading,
    error: delError,
  } = useApi(`${API_URL}/product/${selectedProductId}/delete`);

  //handle edit product - needs to be moved to ProductRow and lifted up
  const handleEditProdcut = (id: string) => {
    navigate(`/vendor/dashboard/edit-product/${id}`);
  };

  //API hooks for clone product
  const {
    post,
    loading: cloneLoading,
    error: cloneError,
  } = useApi(`${API_URL}/vendor/product/clone`);

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
      <ProductDetails
        onDeleteProduct={handleDeleteProduct}
        onCloneProduct={handleProductClone}
        onEditProduct={handleEditProdcut}
      />
    </div>
  );
}
