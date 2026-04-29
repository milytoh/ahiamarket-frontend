
const API_URL = import.meta.env.VITE_API_URL;

import { useApi } from "@/hooks/useApi";
import { useEffect, useState } from "react";

import EditProductHeader from "@/components/vendor/products/EditProductHeader";

import AddProductInsight from "@/components/vendor/products/AddProductInsight";
import EditProductForm from "@/components/vendor/products/ProductEditForm";

import { useParams } from "react-router-dom";


export default function EditProduct() {

    const { id } = useParams();
    


  return (
    <div className="bg-background-light min-h-screen">
      <div className="max-w-6xl mx-auto p-6 md:p-10">
        <EditProductHeader />

        <EditProductForm />

        <AddProductInsight />
      </div>
    </div>
  );
}




