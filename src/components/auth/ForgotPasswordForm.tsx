import React from "react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginFormData } from "@/utils/schemas/registrationSchema";
import { useApi } from "@/hooks/useApi";

import InputForm from "./InputForm";
import OtpForm from "./OtpForm";
import Spinner from "../ui/Spinner";

import googlelogo from "@/assets/images/logos/google.jfif";
import fblogo from "@/assets/images/logos/fb.jfif";
import { Link, NavLink } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "@/store/hook";
import { loginUser } from "@/features/auth/authThunk";

interface LoginPayload {
  email: string;
  password: string;
}

interface LoginResponse {
  success: boolean;
  message: string;
}

const ForgotPasswordForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { loading, error } = useAppSelector((state) => state.auth);

  // handling form and validation with Form hook and zod
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    reset,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const showPasswordHandler = () => {
    setShowPassword((prev) => !prev);
  };

  //// form submition
  const onSubmit = async (data: any) => {
    console.log(data);
    const result = await dispatch(loginUser(data));

    
  };

  // google auth redirect url
  const handleGoogleLogin = () => {
    window.location.href = `${import.meta.env.VITE_API_URL}/account/auth/google`;
  };

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
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <InputForm
          type="email"
          placeholder="Email Address"
          label=" Email Address"
          {...register("email")}
          // error={errors.email?.message}
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

          {!loading && <p> Login</p>}
        </button>
     
       

      </form>
     
    </>
  );
};

export default ForgotPasswordForm;
