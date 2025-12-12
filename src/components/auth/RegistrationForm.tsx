import React from "react";

const RegistrationForm: React.FC = () => {
  return (
    <>
      <div className="relative flex h-auto min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
        <header className="absolute top-0 left-0 p-6">
          <h1 className="text-2xl font-bold text-primary">Ahiamarket</h1>
        </header>
        <main className="w-full max-w-md">
          <div className="bg-white dark:bg-zinc-900 p-8 rounded-xl shadow-lg">
            <div className="text-center mb-8">
              <p className="text-3xl font-black leading-tight tracking-tight text-text-light dark:text-text-dark">
                Create your Account
              </p>
              <p className="text-base text-gray-500 dark:text-gray-400 mt-2">
                Join the largest online marketplace in Nigeria.
              </p>
            </div>
            <form className="space-y-6">
              <div className="relative">
                <input
                  className="peer h-14 w-full rounded border border-gray-300 dark:border-gray-700 bg-background-light dark:bg-background-dark px-4 text-text-light dark:text-text-dark placeholder-transparent focus:border-accent focus:outline-none focus:ring-0 form-input"
                  id="full_name"
                  name="full_name"
                  placeholder="Full Name"
                  type="text"
                />
                <label
                  className="absolute left-4 -top-3.5 text-gray-600 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-3.5 peer-focus:text-accent peer-focus:text-sm"
                  htmlFor="full_name"
                >
                  Full Name
                </label>
              </div>
              <div className="relative">
                <input
                  className="peer h-14 w-full rounded border border-gray-300 dark:border-gray-700 bg-background-light dark:bg-background-dark px-4 text-text-light dark:text-text-dark placeholder-transparent focus:border-accent focus:outline-none focus:ring-0 form-input"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  type="email"
                />
                <label
                  className="absolute left-4 -top-3.5 text-gray-600 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-3.5 peer-focus:text-accent peer-focus:text-sm"
                  htmlFor="email"
                >
                  Email Address
                </label>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <span className="text-gray-500 dark:text-gray-400">+234</span>
                </div>
                <input
                  className="peer h-14 w-full rounded border border-gray-300 dark:border-gray-700 bg-background-light dark:bg-background-dark pl-14 pr-4 text-text-light dark:text-text-dark placeholder-transparent focus:border-accent focus:outline-none focus:ring-0 form-input"
                  id="phone_number"
                  name="phone_number"
                  placeholder="Phone Number"
                  type="tel"
                />
                <label
                  className="absolute left-14 -top-3.5 text-gray-600 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-3.5 peer-focus:text-accent peer-focus:text-sm"
                  htmlFor="phone_number"
                >
                  Phone Number
                </label>
              </div>
              <div className="relative">
                <input
                  className="peer h-14 w-full rounded border border-gray-300 dark:border-gray-700 bg-background-light dark:bg-background-dark px-4 text-text-light dark:text-text-dark placeholder-transparent focus:border-accent focus:outline-none focus:ring-0 form-input"
                  id="password"
                  name="password"
                  placeholder="Create a password"
                  type="password"
                />
                <label
                  className="absolute left-4 -top-3.5 text-gray-600 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-3.5 peer-focus:text-accent peer-focus:text-sm"
                  htmlFor="password"
                >
                  Password
                </label>
                <button
                  className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 hover:text-accent"
                  type="button"
                >
                  <span className="material-symbols-outlined">
                    visibility_off
                  </span>
                </button>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                    Password strength
                  </span>
                  <span className="text-xs font-bold" id="strength-text"></span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                  <div
                    className="password-strength-bar"
                    id="strength-bar"
                  ></div>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    aria-describedby="terms-description"
                    className="h-4 w-4 rounded border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-primary focus:ring-primary dark:focus:ring-offset-background-dark"
                    id="terms"
                    name="terms"
                    type="checkbox"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    className="text-gray-500 dark:text-gray-400"
                    htmlFor="terms"
                  >
                    I agree to the{" "}
                    <a
                      className="font-medium text-primary hover:underline"
                      href="#"
                    >
                      Terms &amp; Conditions
                    </a>{" "}
                    and{" "}
                    <a
                      className="font-medium text-primary hover:underline"
                      href="#"
                    >
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
                <a
                  className="font-medium text-primary hover:underline"
                  href="#"
                >
                  Sign In
                </a>
              </p>
            </form>
          </div>
        </main>
      </div>
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
