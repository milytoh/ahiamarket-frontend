import React from "react";

import LoginForm from "@/components/auth/LoginForm";

const LoginPage: React.FC = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8 mb-12">
     
      <main className="w-full max-w-md">
        <div className="bg-white dark:bg-zinc-900 p-8 rounded-xl shadow-lg">
          <div className="text-center mb-8">
            <p className="text-3xl font-black text-brand-orange  leading-tight tracking-tight text-text-light dark:text-text-dark">
             Login
            </p>
           
          </div>
          {/* form */}
          <LoginForm />
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
