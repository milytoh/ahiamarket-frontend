"use client";

import React, { useState } from "react";

import AddProductHeader from "@/components/vendor/products/AddProductHeader";

import AddProductInsight from "@/components/vendor/products/AddProductInsight";

import EditProductForm from "@/components/vendor/products/editProductForm";

export default function AddProduct() {
  return (
    <div className="bg-background-light min-h-screen">
      <div className="max-w-6xl mx-auto p-6 md:p-10">
        <AddProductHeader />

        <EditProductForm />

        <AddProductInsight />
      </div>
    </div>
  );
}
