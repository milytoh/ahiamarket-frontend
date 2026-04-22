"use client";

import React, { useState } from "react";

import AddProductHeader from "@/components/vendor/products/AddProductHeader";

import AddProductForm from "@/components/vendor/products/AddProductForm";

import AddProductInsight from "@/components/vendor/products/AddProductInsight";

export default function AddProduct() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // const handleFormSubmit = async (formData: any) => {
  //   setIsSubmitting(true);

  //   try {
  //     console.log("Submitting product to backend:", formData);

  //     // TODO: Replace with your actual API endpoint
  //     const response = await fetch("/api/vendor/products", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     if (response.ok) {
  //       const result = await response.json();
  //       alert("✅ Product added successfully!");
  //       console.log("Backend response:", result);

  //       // Optional: Reset form or redirect
  //       // window.location.href = "/vendor/products";
  //     } else {
  //       const error = await response.json();
  //       alert(`Failed to add product: ${error.message || "Unknown error"}`);
  //     }
  //   } catch (error) {
  //     console.error("Submission error:", error);
  //     alert(
  //       "Something went wrong. Please check your connection and try again.",
  //     );
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  return (
    <div className="bg-background-light min-h-screen">
      <div className="max-w-6xl mx-auto p-6 md:p-10">
        <AddProductHeader />

        <AddProductForm
       
         
        />

        <AddProductInsight />
      </div>
    </div>
  );
}
