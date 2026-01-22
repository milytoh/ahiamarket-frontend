import React from "react";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/store/hook";
import { setCredentials } from "@/features/auth/authSlice";

import ResetPasswordForm from "@/components/auth/ResetPasswordForm";

const ResetPassword: React.FC = () => {
  
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    const id = params.get("id");

    console.log(id, token);

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8 mb-12 -mt-14">
      <main className="w-full max-w-md">
        <div className="bg-white dark:bg-zinc-900 p-8 rounded-xl shadow-lg">
          <div className="text-center mb-8">
            <p className="text-2xl font-black text-brand-orange  leading-tight tracking-tight text-text-light dark:text-text-dark">
              Enter new Password
            </p>
          </div>
          {/* form */}
                  <ResetPasswordForm id={id} token={token}  />
        </div>
      </main>
    </div>
  );
};

export default ResetPassword;
