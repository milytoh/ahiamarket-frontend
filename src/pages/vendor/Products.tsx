const API_URL = import.meta.env.VITE_API_URL;

import { useApi } from "@/hooks/useApi";
import { useEffect, useState } from "react";

import ProductsHeader from "@/components/vendor/products/ProductsHeader";
import ProductsFilters from "@/components/vendor/products/ProductsFilters";
import ProductsTable from "@/components/vendor/products/ProductsTable";

import ProductsSummary from "@/components/vendor/products/ProductsSummary";

interface Product {
  id: number;
  name: string;
  sku: string;
  image: string;
  price: number;
  stock: number;
  status: string;
  podEnabled: boolean;
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [url, setUrl] = useState(
      `${API_URL}/vendor/products?page=${page}&limit=${limit}`,
  );
  
  const { get, loading, error } = useApi(url);
  
   useEffect(() => {
     const params = new URLSearchParams();

     params.append("page", String(page));
     params.append("limit", String(limit));

     const newUrl = `${API_URL}/vendor/products?${params.toString()}`;

     setUrl(newUrl);
   }, [ page, limit]);

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
              ? `http://localhost:3000/uploads/products/${item.images[0]}`
              : "/placeholder.png",
            price: item.price,
            stock: item.stock,
            status: item.status,
            podEnabled: item.pod,
          }),
        );
        setProducts(mappedProducts);
      } catch (err) {
        console.log(err);
      }
    };

    fetchDashboard();
  }, [url]);

  return (
    <div className="bg-background-light min-h-screen p-6 md:p-10 max-w-7xl mx-auto">
      <ProductsHeader />
      <ProductsFilters />
      <ProductsTable
        products={products!}
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
      <ProductsSummary />
    </div>
  );
}
