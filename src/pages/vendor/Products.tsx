const API_URL = import.meta.env.VITE_API_URL;

import { useApi } from "@/hooks/useApi";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import ProductsHeader from "@/components/vendor/products/ProductsHeader";
import ProductsFilters from "@/components/vendor/products/ProductsFilters";
import ProductsTable from "@/components/vendor/products/ProductsTable";

import ProductsSummary from "@/components/vendor/products/ProductsSummary";
import ProductsTableSkeleton from "@/components/ui/skeletons/vendor/products/ProductsTableSkeleton";

import ErrorState from "@/components/ui/Error";
import { toast } from "react-toastify";
import Modal from "@/components/ui/Modal";

interface Product {
  id: string;
  name: string;
  sku: string;
  image: string;
  price: number;
  stock: number;
  status: string;
  pod: boolean;
  visible: boolean;
}

export type Filters = {
  status?: "active" | "out_of_stock" | "draft";
  category?: "Fashion" | "Electronics" | "Home & Kitchen" | "Beauty";
  startDate?: Date | null;
  endDate?: Date | null;
};

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(
    null,
  );

  const navigate = useNavigate();

  const [filters, setFilters] = useState<Filters>({
    status: "active",
  });
  const [url, setUrl] = useState(
    `${API_URL}/vendor/products?page=${page}&limit=${limit}&status=${filters.status}`,
  );

  //API hooks for produucts
  const { get, loading, error } = useApi(url);

  //API hooks for delete product
  const {
    del,
    loading: delLoading,
    error: delError,
  } = useApi(`${API_URL}/product/${selectedProductId}/delete`);

  // API hooks for updating product
  const {
    patch,
    loading: podLoading,
    error: podError,
  } = useApi(`${API_URL}/vendor/product/pod/update`);

  // API hook for toggling visibility
  const {
    patch: visibilityPatch,
    loading: visibilityLoading,
    error: visibilityError,
  } = useApi(`${API_URL}/vendor/product/visible/update`);

  const {
    post,
    loading: cloneLoading,
    error: cloneError,
  } = useApi(`${API_URL}/vendor/product/clone`);

  const handleFilter = (filters: Filters) => {
    setFilters(filters);
  };

  //for POD toggle - needs to be moved to ProductRow and lifted up
  const handleTogglePod = async (productId: string, value: boolean) => {
    try {
      // optimistic UI update
      setProducts((prev) =>
        prev.map((p) => (p.id === productId ? { ...p, pod: value } : p)),
      );

      // send to backend
      const response = await patch({
        pod: value,
        id: productId,
      });
    } catch (err) {
      // rollback if failed
      setProducts((prev) =>
        prev.map((p) => (p.id === productId ? { ...p, pod: !value } : p)),
      );

      toast.error("operation failed, check your network connection");
    }
  };

  //for visibility toggle - needs to be moved to ProductRow and lifted up
  const handleVisibilityToggle = async (productId: string, value: boolean) => {
    try {
      // optimistic UI update
      setProducts((prev) =>
        prev.map((p) => (p.id === productId ? { ...p, visible: value } : p)),
      );

      // send to backend
      await visibilityPatch({
        visible: value,
        id: productId,
      });
    } catch (err) {
      // rollback if failed
      setProducts((prev) =>
        prev.map((p) => (p.id === productId ? { ...p, visible: !value } : p)),
      );
      toast.error("operation failed, check your network connection");
    }
  };

  //edit product handler
  const handleEditProdcut = (id: string) => {
    navigate(`/vendor/dashboard/edit-product/${id}`);
  };

  //handle delete product - needs to be moved to ProductRow and lifted up
  const handleDeleteProduct = async (id: string) => {
    setIsDeleteModalOpen(true);
    setSelectedProductId(id);
  };

  const handleConfirmDelete = async () => {
    //  Save current state (for rollback)
    const previousProducts = products;

    // Optimistically remove from UI
    setProducts((prev) => prev.filter((p) => p.id !== selectedProductId));

    setIsDeleteModalOpen(false);

    try {
      const res = await del();
      console.log(res);
      toast.success("Product deleted successfully");
    } catch (error: any) {
      toast.error("product deletion failed", error.message);

      // Rollback UI if failed
      setProducts(previousProducts);
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

  useEffect(() => {
    const params = new URLSearchParams();

    if (filters.startDate)
      params.append("startDate", filters.startDate.toISOString());

    if (filters.endDate)
      params.append("endDate", filters.endDate.toISOString());

    params.append("status", filters.status || "active");

    params.append("page", String(page));
    params.append("limit", String(limit));

    const newUrl = `${API_URL}/vendor/products?${params.toString()}`;

    setUrl(newUrl);
  }, [page, limit, filters]);

  const handleProductClick = (id: string) => {
    navigate(`/vendor/dashboard/product/details/${id}`);
  };
  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const response = await get();

        const mappedProducts: Product[] = response.products.map(
          (item: any) => ({
            id: item._id,
            name: item.name,
            sku: item._id.slice(-6).toUpperCase(),
            image: item.images?.[0]
              ? `${API_URL}/uploads/products/${item.images[0]}`
              : "/placeholder.png",
            price: item.price,
            stock: item.stock,
            status: item.status,
            pod: item.pod,
            visible: item.visible,
          }),
        );

        setProducts(mappedProducts);

        setTotalPages(response.totalPages);
      } catch (err) {}
    };

    fetchDashboard();
  }, [url]);

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
            disabled={loading}
            className="px-5 py-3 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-semibold transition-all disabled:opacity-60"
          >
            {loading ? "Deleting..." : "Delete Product"}
          </button>
        </div>
      </Modal>
      <ProductsHeader />
      <ProductsFilters onFilter={handleFilter} />
      {loading ? (
        <ProductsTableSkeleton />
      ) : (
        <ProductsTable
          products={products!}
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setPage}
          onTogglePod={handleTogglePod}
          onToggleVisibility={handleVisibilityToggle}
          onEditProduct={handleEditProdcut}
          onDeleteProduct={handleDeleteProduct}
          onCloneProduct={handleProductClone}
          onProductClick={handleProductClick}
        />
      )}
      <ProductsSummary />
    </div>
  );
}
