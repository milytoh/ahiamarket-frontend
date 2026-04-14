"use client";

import React from "react";
import StoreIdentityForm from "./StoreIdentityForm";

import { FaCheckCircle } from "react-icons/fa";

type Props = {
  formData: any;
  updateFormData: (data: any) => void;
  onNext: () => void;
  onBack: () => void;
  currentStep: number;
  totalSteps: number;
};

export default function StoreIdentity({
  formData,
  updateFormData,
  onNext,
  onBack,
  currentStep,
  totalSteps,
}: Props) {
  return (
    <div className="bg-background-light font-sans text-text-main min-h-screen overflow-x-hidden">
      <div className="flex min-h-screen pt-16">
        {/* Main Content */}
        <main className="flex-1 p-6 md:p-12 flex flex-col items-center">
          <div className="w-full max-w-2xl">
            {/* Header */}
            <header className="mb-10 text-left">
              <span className="inline-block px-3 py-1 mb-4 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider">
                Step {currentStep} of {totalSteps}: Setup
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-text-main mb-4">
                Tell us about your store
              </h1>
              <p className="text-slate-600 max-w-lg">
                Every great business starts with a story. Create an identity
                that resonates with your future customers.
              </p>
            </header>

            {/* Updated Form Component */}
            <StoreIdentityForm
              formData={formData}
              updateFormData={updateFormData}
              onNext={onNext}
              onBack={onBack}
            />

            {/* Footer Visual Aid */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 opacity-60">
              <div className="flex items-start gap-4 p-4">
                <div className="text-emerald-600 mt-0.5">🔒</div>
                <div>
                  <p className="text-xs font-bold text-text-main">
                    Secure Setup
                  </p>
                  <p className="text-[10px] text-slate-500">
                    Your data is encrypted and secure with Ahiamarket.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4">
                {/* <div className="text-primary mt-0.5">✅</div> */}
                <FaCheckCircle className="text-primary mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-text-main">
                    Trusted Vendor
                  </p>
                  <p className="text-[10px] text-slate-500">
                    Join 5,000+ local retailers building their future.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Decorative Background Elements */}
      <div className="fixed top-0 right-0 -z-10 w-1/3 h-screen bg-gradient-to-l from-emerald-50/30 to-transparent pointer-events-none" />
      <div className="fixed -bottom-20 -left-20 -z-10 w-96 h-96 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />
    </div>
  );
}
