import React from "react"

import RegistrationForm from "@/components/auth/RegistrationForm"

const RegistrationPage: React.FC = () => {
    return (
      <div className="relative flex h-auto min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8 mb-12">
        {/* <header className="absolute top-0 left-0 p-6">
          <h1 className="text-2xl font-bold text-primary">Ahiamarket</h1>
        </header> */}
        <main className="w-full max-w-md">
          <div className="bg-white dark:bg-zinc-900 p-8 rounded-xl shadow-lg">
            <div className="text-center mb-8">
              <p className="text-3xl font-black text-brand-orange  leading-tight tracking-tight text-text-light dark:text-text-dark">
                Create your Account
              </p>
              <p className="text-base text-gray-500 dark:text-gray-400 mt-2">
                Join the largest online marketplace in Nigeria.
              </p>
            </div>
            {/* form */}
            <RegistrationForm />
          </div>
        </main>
      </div>
    );
}

export default RegistrationPage
