import React from "react";

import { useState, useEffect } from "react";
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

import { toast } from "react-toastify";

interface LoginPayload {
  email: string;
  password: string;
}

interface LoginResponse {
  success: boolean;
  message: string;
}

const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showOtpForm, setShowOtpForm] = useState(false);
  const [email, setEmail] = useState<string>("");
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
    const result = await dispatch(loginUser(data));
  
      setEmail(data.email);
    
    if (loginUser.fulfilled.match(result)) {
      toast.success("Login successful")
      navigate("/");
    } else {
        toast.error(
          `${error? error.message: "something went wrong, check your network connection"}`
        );
    }
  };

 

  
  // google auth redirect url
  const handleGoogleLogin = () => {
    window.location.href = `${import.meta.env.VITE_API_URL}/account/auth/google`;
  };

  // if (error && error?.message === "please verify your email to continue") {
  //   setShowOtpForm((pre) =>  true)
  // }

  useEffect(() => {
    if (
      error?.message === "please verify your email to continue" 
      
    ) {
      setShowOtpForm(true);
    }
  }, [error]);


  

  //hide otp form
  const onCloseOtp = () => {
    setShowOtpForm((pre) => false);
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

        <InputForm
          type={showPassword ? "text" : "password"}
          placeholder="Create Password"
          label="Password"
          {...register("password")}
          // error={errors.password?.message}
          onShowPwd={showPasswordHandler}
          showpwd={showPassword}
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
        <p className="text-sm text-center text-gray-500 dark:text-gray-400">
          <NavLink
            to={"/forgotpassword"}
            className="font-medium text-primary hover:underline"
          >
            Forgot Password?
          </NavLink>
        </p>

    

        <div className="flex items-center gap-4">
          <hr className="flex-grow border-gray-300 dark:border-gray-600" />
          <span className="text-gray-500 dark:text-gray-400 text-sm">
            Or Login with
          </span>
          <hr className="flex-grow border-gray-300 dark:border-gray-600" />
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center flex-1 min-w-0 resize-none overflow-hidden rounded-lg bg-white dark:bg-gray-800 h-12 p-4 text-base font-medium leading-normal text-text-light dark:text-text-dark border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <img alt="Google logo" className="w-6 h-6 mr-3" src={googlelogo} />
            Login with Google
          </button>
          <button className="flex items-center justify-center flex-1 min-w-0 resize-none overflow-hidden rounded-lg bg-white dark:bg-gray-800 h-12 p-4 text-base font-medium leading-normal text-text-light dark:text-text-dark border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <img alt="Facebook logo" className="w-6 h-6 mr-3" src={fblogo} />
            Login with Facebook
          </button>
        </div>

        <p className="text-sm text-center text-gray-500 dark:text-gray-400">
          Don't have an account?
          <NavLink
            to={"/signup"}
            className="font-medium text-primary hover:underline"
          >
            Sign up
          </NavLink>
        </p>
      </form>
      {/* <!-- OTP Modal (hidden by default) --> */}

      {showOtpForm && <OtpForm onCloseOtForm={onCloseOtp} email={email} naviTo="home"/>}
    </>
  );
};;

export default LoginForm;
