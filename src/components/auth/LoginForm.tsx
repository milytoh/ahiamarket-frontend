import React from "react";

import { useState } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  loginSchema,
    
  LoginFormData
} from "@/utils/schemas/registrationSchema";
import { useApi } from "@/hooks/useApi";

import InputForm from "./InputForm";
import OtpForm from "./OtpForm"

import googlelogo from "@/assets/images/logos/google.jfif";
import fblogo from "@/assets/images/logos/fb.jfif";
import { email } from "zod";



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
  

  //using custom hook
  const { post, loading, error } = useApi<LoginPayload, LoginResponse>(
    "http://localhost:3000/api/account/login"
  );

  // handling form and validation with Form hook and zod
  const {
    register,
    handleSubmit,
    formState: { errors , isSubmitting },
    watch,
    reset,
  } = useForm<LoginFormData>({
   resolver: zodResolver(loginSchema),
  
    // mode: "onChange",
    // reValidateMode: "onChange",
  });


  const showPasswordHandler = () => {
    setShowPassword((prev) => !prev);
  };

 
  //// form submition
  const onSubmit = async (data: any) => {
      console.log(data)
      
      const response = await post({
          email: data?.email,
          password: data?.password
      });

      console.log(response)
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
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
     
        <InputForm
          type="email"
          placeholder="Email Address"
          label=" Email Address"
          {...register("email")}
          error={errors.email?.message}
        />
      
        <InputForm
          type={showPassword ? "text" : "password"}
          placeholder="Create Password"
          label="Password"
          {...register("password")}
          error={errors.password?.message}
          onShowPwd={showPasswordHandler}
          showpwd={showPassword}
        />

        <button
          className={`w-full ${
            loading ? "bg-primary/50" : "bg-primary"
          } text-white font-bold py-4 px-4 rounded-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-background-dark transition duration-300 ease-in-out`}
          type="submit"
        >
          Login
        </button>
        {/* or signup width google */}
        {/* <div className="flex flex-col "> 
          <
        </ div> */}

        <div className="flex items-center gap-4">
          <hr className="flex-grow border-gray-300 dark:border-gray-600" />
          <span className="text-gray-500 dark:text-gray-400 text-sm">
            Or Login up with
          </span>
          <hr className="flex-grow border-gray-300 dark:border-gray-600" />
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="flex items-center justify-center flex-1 min-w-0 resize-none overflow-hidden rounded-lg bg-white dark:bg-gray-800 h-12 p-4 text-base font-medium leading-normal text-text-light dark:text-text-dark border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
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
          <a className="font-medium text-primary hover:underline" href="#">
            Sign up
          </a>
        </p>
      </form>
      {/* <!-- OTP Modal (hidden by default) --> */}
{/* 
      {showOtp && <OtpForm onCloseOtForm={onCloseOtp} email={email } />} */}
    </>
  );
};

export default LoginForm;
