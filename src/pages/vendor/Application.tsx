const API_URL = import.meta.env.VITE_API_URL;
import React, { useState, useEffect } from "react";
import { useApi } from "@/hooks/useApi";

import VendorIntro from "@/components/vendor/application/VendorIntro";
import StoreIdentity from "@/components/vendor/application/StoreIdentity";
import StoreLocation from "@/components/vendor/application/StoreLocation";
import StoreReview from "@/components/vendor/application/StoreReview";

import { toast } from "react-toastify";

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

  //using custom hook
  const { post, loading, error } = useApi(`${API_URL}/user/vendor-application`);

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
    try {
      console.log("Submitting full application:", formData);

      // Replace with your actual API call
      const res = await post({ ...formData });
      console.log(res);
      toast.success(
        "Application successful, we will review your info, before approval. ",
      );
    } catch (error) {
      console.error(error);
    }
  };

  const CurrentStepComponent =
    steps.find((s) => s.id === currentStep)?.component || VendorIntro;

   useEffect(() => {
      if (error) {
        toast.error(error.message);
      }
    }, [error])

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
        isSubmitting={loading}
        goToStep={goToStep} // Only Review step will use this if needed
      />
    </div>
  );
}
