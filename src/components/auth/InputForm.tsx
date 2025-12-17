import React, { ChangeEvent } from "react";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

type InputFormProp = {
  label: string;
  placeholder: string;
  type?: string;
  error?: string;
  onShowPwd?: () => void;
  showpwd?: boolean
};

const InputForm: React.FC<InputFormProp> = ({ label, error, showpwd, onShowPwd, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <input
        className="peer h-14 w-full rounded border border-gray-300 dark:border-gray-700 bg-[#e6f4f1] focus:outline-0 focus:border-none  dark:bg-background-dark px-4 text-text-light dark:text-text-dark placeholder-transparent focus:border-accent focus:outline-none focus:ring-0 form-input"
        {...props}
      />
      {label == "Password" && (
        <button
          type="button"
          onClick={onShowPwd}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
        >
          {showpwd ? <FiEyeOff /> : <FiEye />}
        </button>
      )}
      <label
        className="absolute left-4  -top-3.5 text-gray-600 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-3.5 peer-focus:text-accent peer-focus:text-sm"
        htmlFor={label}
      >
        {label}
      </label>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default InputForm;
