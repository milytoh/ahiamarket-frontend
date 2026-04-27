const API_URL = import.meta.env.VITE_API_URL;

import { useApi } from "@/hooks/useApi";
import { useEffect, useState } from "react";

import ProductsHeader from "@/components/vendor/products/ProductsHeader";
import ProductsFilters from "@/components/vendor/products/ProductsFilters";
import ProductsTable from "@/components/vendor/products/ProductsTable";

import ProductsSummary from "@/components/vendor/products/ProductsSummary";

import ProductsTableSkeleton from "@/components/ui/skeletons/vendor/products/ProductsTableSkeleton";

interface Product {
  id: number;
  name: string;
  sku: string;
  image: string;
  price: number;
  stock: number;
  status: string;
  pod: boolean;
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

  const [filters, setFilters] = useState<Filters>({
    status: "active",
  });
  const [url, setUrl] = useState(
    `${API_URL}/vendor/products?page=${page}&limit=${limit}&status=${filters.status}`,
  );

  const { get, loading, error } = useApi(url);

  const { patch, loading: podLoading, error: podError } = useApi(url);

  const handleFilter = (filters: Filters) => {
    setFilters(filters);
  };

  //for POD toggle - needs to be moved to ProductRow and lifted up
  const handleTogglePod = async (productId: number, value: boolean) => {
    try {
      // optimistic UI update
      setProducts((prev) =>
        prev.map((p) => (p.id === productId ? { ...p, pod: value } : p)),
      );

      console.log(productId, value);

      // send to backend
      await patch({
        pod: value,
      });
    } catch (err) {
      console.log(err);

      // rollback if failed
      setProducts((prev) =>
        prev.map((p) =>
          p.id === productId ? { ...p, podEnabled: !value } : p,
        ),
      );
    }
  };

  useEffect(() => {
    const params = new URLSearchParams();

    console.log(filters);

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

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const response = await get();

        console.log(response);

        const mappedProducts: Product[] = response.products.map(
          (item: any) => ({
            id: item._id,
            name: item.name,
            sku: item._id.slice(-6).toUpperCase(),
            image: item.images?.[0]
              ? `http://localhost:3000/uploads/products/${item.images[0]}`
              : "/placeholder.png",
            price: item.price,
            stock: item.stock,
            status: item.status,
            podEnabled: item.pod === "true",
          }),
        );

        setProducts(mappedProducts);

        setTotalPages(response.totalPages);
      } catch (err) {
        console.log(err);
      }
    };

    fetchDashboard();
  }, [url]);

  return (
    <div className="bg-background-light min-h-screen p-6 md:p-10 max-w-7xl mx-auto">
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
        />
      )}
      <ProductsSummary />
    </div>
  );
}
