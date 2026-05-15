const API_URL = import.meta.env.VITE_API_URL;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApi } from "@/hooks/useApi";
import { toast } from "react-toastify";
import Modal from "@/components/ui/Modal";

import ProductDetails from "@/components/vendor/products/ProductDetails";

export default function ProductDetail() {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
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
    setIsDeleteModalOpen(false);

    try {
      const res = await del();
      console.log(res);
      toast.success("Product deleted successfully");
    } catch (error: any) {
      toast.error("product deletion failed", error.message);
    }
  };

  //handle clone product - needs to be moved to ProductRow and lifted up
  const handleProductClone = async (id: string) => {
    console.log("clone product with id:", id);
    setSelectedProductId(id);

    try {
      await post({
        productId: id,
      });
      // get()
      toast.success("Product cloned successfully. check your drafts!!!");
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
      <ProductDetails onDeleteProduct={handleDeleteProduct} onCloneProduct={handleProductClone} onEditProduct={handleEditProdcut}/>
    </div>
  );
}
