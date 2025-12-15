import React from "react";

import { useState } from "react";

import InputForm from "./InputForm";

type FormData = {
  fullName: string;
  phoneNumber: string;
  email: string;
  password: string;
};

const RegistrationForm: React.FC = () => {

  // form state
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  // input event handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    console.log(name, value)
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // console.log("Form Data:", formData);

    // Example: send to backend
    // await login(formData)
  };
 

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        <InputForm
          type="text"
          placeholder="Full Name"
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
        <InputForm
          type="email"
          placeholder="Email Address"
          label=" Email Address"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <InputForm
          type="tel"
          placeholder="Phone Number"
          label="Phone Number"
          name="phonNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        <InputForm
          type="password"
          placeholder="Create Password"
          label="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

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
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              aria-describedby="terms-description"
              className="h-4 w-4 rounded border-gray-300 dark:border-gray-600  dark:bg-gray-800 text-primary focus:ring-primary dark:focus:ring-offset-background-dark"
              id="terms"
              name="terms"
              type="checkbox"
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
        <button
          className="w-full bg-primary text-white font-bold py-4 px-4 rounded-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-background-dark transition duration-300 ease-in-out"
          type="submit"
        >
          Create Account
        </button>
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
