import React from "react";

import { useState } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, RegisterFormData } from "@/utils/schemas/registrationSchema";
import { useApi } from "@/hooks/useApi";
import googlelogo from "@/assets/images/logos/google.jfif"
import fblogo from "@/assets/images/logos/fb.jfif"

import InputForm from "./InputForm";


//Password strength logic
type Strength = "Weak" | "Medium" | "Strong" | "Very Strong";

function getPasswordStrength(password: string): {
  label: Strength;
  percent: number;
  color: string;
} {
  let score = 0;

  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  if (score <= 2) return { label: "Weak", percent: 25, color: "bg-red-500" };
  if (score === 3)
    return { label: "Medium", percent: 50, color: "bg-yellow-500" };
  if (score === 4)
    return { label: "Strong", percent: 75, color: "bg-blue-500" };

  return { label: "Very Strong", percent: 100, color: "bg-green-500" };
}

interface RegisterPayload {
  fullName: string;
  email: string;
  password: string;
  terms: boolean

}

interface RegisterResponse {
  success: boolean;
  message: string;
}



const RegistrationForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  //using custom hook
  const { post, loading, error } = useApi<RegisterPayload, RegisterResponse>(
    "http://localhost:3000/api/account/signup"
  );

  // handling form and validation with Form hook and zod
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    reset
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      terms: false,
    },
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const password = watch("password", "");

  // getting password strength
  const strength = getPasswordStrength(password);

  const showPasswordHandler = () => {
    setShowPassword((prev) => !prev);
  };

  //// form submition
  const onSubmit = async (data: any) => {
    
   console.log(data)
     const response = await post(data);
     console.log(response)
 

    // reset()
  };
  
  return (
    <>
    {error && (
     <p className=" flex justify-center items-center text-red-500 text-medium mb-6 -mt-2">{error}</p>
         )}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <InputForm
          type="text"
          placeholder="Full Name"
          label="Full Name"
          {...register("fullName")}
          error={errors.fullName?.message}
        />
        <InputForm
          type="email"
          placeholder="Email Address"
          label=" Email Address"
          {...register("email")}
          error={errors.email?.message}
        />
        {/* <InputForm
          type="tel"
          placeholder="Phone Number"
          label="Phone Number"
          {...register("phoneNumber")}
          error={errors.phoneNumber?.message}
        /> */}
        <InputForm
          type={showPassword ? "text" : "password"}
          placeholder="Create Password"
          label="Password"
          {...register("password")}
          error={errors.password?.message}
          onShowPwd={showPasswordHandler}
          showpwd={showPassword}
        />
        {!password && (
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                Password strength
              </span>
              <span className="text-xs font-bold" id="strength-text"></span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
              <div className="password-strength-bar" id="strength-bar"></div>
            </div>
          </div>
        )}

        {password && (
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                Password strength
              </span>
              <span className="text-xs font-bold">{strength.label}</span>
            </div>

            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
              <div
                className={`h-1.5 rounded-full transition-all duration-300 ${strength.color}`}
                style={{ width: `${strength.percent}%` }}
              />
            </div>
          </div>
        )}

        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              aria-describedby="terms-description"
              className="h-4 w-4 rounded border-gray-300 dark:border-gray-600  dark:bg-gray-800 text-primary focus:ring-primary dark:focus:ring-offset-background-dark"
              id="terms"
              type="checkbox"
              {...register("terms")}
            />
          </div>
          <div className="ml-3 text-sm">
            <label className="text-gray-500 dark:text-gray-400" htmlFor="terms">
              I agree to the{" "}
              <a className="font-medium text-primary hover:underline" href="#">
                Terms &amp; Conditions
              </a>{" "}
              and{" "}
              <a className="font-medium text-primary hover:underline" href="#">
                Privacy Policy
              </a>
              .
            </label>
          </div>
        </div>
        {errors && (
          <p className="text-red-500 text-sm">{errors.terms?.message}</p>
        )}
        <button
          className="w-full bg-primary text-white font-bold py-4 px-4 rounded-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-background-dark transition duration-300 ease-in-out"
          type="submit"
        >
          Create Account
        </button>
        {/* or signup width google */}
        {/* <div className="flex flex-col "> 
          <
        </ div> */}

        <div className="flex items-center gap-4">
<hr className="flex-grow border-gray-300 dark:border-gray-600"/>
<span className="text-gray-500 dark:text-gray-400 text-sm">Or sign up with</span>
<hr className="flex-grow border-gray-300 dark:border-gray-600"/>
</div>
<div className="flex flex-col sm:flex-row gap-4">
<button className="flex items-center justify-center flex-1 min-w-0 resize-none overflow-hidden rounded-lg bg-white dark:bg-gray-800 h-12 p-4 text-base font-medium leading-normal text-text-light dark:text-text-dark border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
<img alt="Google logo" className="w-6 h-6 mr-3" src={googlelogo}/>
                                Sign up with Google
                            </button>
<button className="flex items-center justify-center flex-1 min-w-0 resize-none overflow-hidden rounded-lg bg-white dark:bg-gray-800 h-12 p-4 text-base font-medium leading-normal text-text-light dark:text-text-dark border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
<img alt="Facebook logo" className="w-6 h-6 mr-3" src={fblogo}/>
                                Sign up with Facebook
                            </button>
</div>

        <p className="text-sm text-center text-gray-500 dark:text-gray-400">
          Already have an account?
          <a className="font-medium text-primary hover:underline" href="#">
            Sign In
          </a>
        </p>
      </form>
      {/* <!-- OTP Modal (hidden by default) --> */}
      <div
        className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center p-4 hidden"
        id="otp-modal"
      >
        <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-lg p-8 max-w-sm w-full text-center">
          <h2 className="text-2xl font-bold mb-4 text-text-light dark:text-text-dark">
            Verify Your Email
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            We've sent a One-Time Password to your email. Please enter it below.
          </p>
          <div className="flex justify-center gap-2 mb-6">
            <input
              className="w-12 h-14 text-center text-2xl font-semibold rounded-lg border border-gray-300 dark:border-gray-700 focus:border-accent focus:ring-accent form-input"
              maxLength={1}
              type="text"
            />
            <input
              className="w-12 h-14 text-center text-2xl font-semibold rounded-lg border border-gray-300 dark:border-gray-700 focus:border-accent focus:ring-accent form-input"
              maxLength={1}
              type="text"
            />
            <input
              className="w-12 h-14 text-center text-2xl font-semibold rounded-lg border border-gray-300 dark:border-gray-700 focus:border-accent focus:ring-accent form-input"
              maxLength={1}
              type="text"
            />
            <input
              className="w-12 h-14 text-center text-2xl font-semibold rounded-lg border border-gray-300 dark:border-gray-700 focus:border-accent focus:ring-accent form-input"
              maxLength={1}
              type="text"
            />
            <input
              className="w-12 h-14 text-center text-2xl font-semibold rounded-lg border border-gray-300 dark:border-gray-700 focus:border-accent focus:ring-accent form-input"
              maxLength={1}
              type="text"
            />
            <input
              className="w-12 h-14 text-center text-2xl font-semibold rounded-lg border border-gray-300 dark:border-gray-700 focus:border-accent focus:ring-accent form-input"
              maxLength={1}
              type="text"
            />
          </div>
          <button className="w-full bg-primary text-white font-bold py-3 px-4 rounded-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-background-dark transition duration-300 ease-in-out">
            Verify
          </button>
          <button
            className="mt-4 text-sm text-gray-500 dark:text-gray-400 hover:underline"
            id="close-modal"
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default RegistrationForm;
