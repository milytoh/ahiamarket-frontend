"use client";

import React, { useState } from "react";

import VendorIntro from "@/components/vendor/application/VendorIntro";
import StoreIdentity from "@/components/vendor/application/StoreIdentity";
import StoreLocation from "@/components/vendor/application/StoreLocation";
import StoreReview from "@/components/vendor/application/StoreReview";

export type VendorFormData = {
  storeNameIdentity?: string;
  storeBioIdentity?: string;
  address?: string;
  city?: string;
  state?: string;
};

const steps = [
  { id: 1, title: "Welcome", component: VendorIntro },
  { id: 2, title: "Identity", component: StoreIdentity },
  { id: 3, title: "Location", component: StoreLocation },
  { id: 4, title: "Review", component: StoreReview },
];

export default function VendorApplication() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<VendorFormData>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateFormData = (newData: Partial<VendorFormData>) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  const goToNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const goToPrevious = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const goToStep = (step: number) => {
    if (step >= 1 && step <= steps.length) {
      setCurrentStep(step);
    }
  };

  const handleFinalSubmit = async () => {
    setIsSubmitting(true);
    try {
      console.log("Submitting full application:", formData);

      // Replace with your actual API call
      const response = await fetch("/api/vendor/application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("✅ Application submitted successfully!");
        // Redirect to success page
        window.location.href = "/vendor/success";
      } else {
        alert("❌ Failed to submit application. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert(
        "❌ Something went wrong. Please check your connection and try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const CurrentStepComponent =
    steps.find((s) => s.id === currentStep)?.component || VendorIntro;

  return (
    <div>
      <CurrentStepComponent
        formData={formData}
        updateFormData={updateFormData}
        onNext={goToNext}
        onBack={goToPrevious}
        currentStep={currentStep}
        totalSteps={steps.length}
        onSubmit={handleFinalSubmit}
        isSubmitting={isSubmitting}
        goToStep={goToStep} // Only Review step will use this if needed
      />
    </div>
  );
}
