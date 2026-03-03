import React from "react";

import { useState } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  forgotpasswordSchema,
  ForgotPasswordData,
} from "@/utils/schemas/registrationSchema";

import { useApi } from "@/hooks/useApi";

import InputForm from "./InputForm";
import Spinner from "../ui/Spinner";

import { toast } from "react-toastify";

interface PRequestPayload {
  email: string;
}

interface Response {
  success: boolean;
  message: string;
}

const ForgotPasswordForm: React.FC = () => {
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  //using custom hook
  const { post, loading, error } = useApi<PRequestPayload, Response>(
    `${import.meta.env.VITE_API_URL}/account/request-password-reset`,
  );

  // handling form and validation with Form hook and zod
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordData>({
    resolver: zodResolver(forgotpasswordSchema),
  });

  //// form submition
  const onSubmit = async (data: any) => {
    const response = await post(data);
    toast.success("password reset link has been sent to the E-mail provided")
    setSuccessMsg((prev) => response.message);

  };

  if (error) {
    toast.error("something went wrong")
  }

  return (
    <>
      <div className="mb-6 -mt-6 flex flex-col justify-center items-center">
        {error?.errors && error.errors.length > 0 && (
          <ul className="text-red-500 text-sm mt-2">
            {error.errors.map((e: any, i: number) => (
              <li key={i}>
                {e.field}: {e.message}
              </li>
            ))}
          </ul>
        )}

        {error?.message && !error.errors && (
          <p className="text-red-500 text-sm mt-2">{error.message}</p>
        )}
        {!error?.message && (
          <p className="text-primary text-sm mt-2">{successMsg}</p>
        )}
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <InputForm
          type="email"
          placeholder="Email Address"
          label=" Email Address"
          {...register("email")}
          error={errors.email?.message}
        />

        <button
          className={`w-full ${
            loading ? "bg-primary/50" : "bg-primary"
          } text-white font-bold py-4 px-4 rounded-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-background-dark transition duration-300 ease-in-out`}
          type="submit"
        >
          {loading && (
            <div className="flex justify-center items-center">
              {" "}
              <Spinner size="md" />{" "}
            </div>
          )}

          {!loading && <p> Request</p>}
        </button>
      </form>
    </>
  );
};

export default ForgotPasswordForm;
