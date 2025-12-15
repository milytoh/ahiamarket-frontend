import React, { ChangeEvent } from "react";

type InputFormProp = {
  label: string;
  name: string;
  placeholder: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputForm: React.FC<InputFormProp> = ({
  label,
  name,
  placeholder,
  type,
  value,
  onChange,
}) => {
  return (
    <div className="relative">
      <input
        className="peer h-14 w-full rounded border border-gray-300 dark:border-gray-700 bg-[#e6f4f1] focus:outline-0 focus:border-none  dark:bg-background-dark px-4 text-text-light dark:text-text-dark placeholder-transparent focus:border-accent focus:outline-none focus:ring-0 form-input"
        id={name}
        name={name}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        onInput={onChange}
        value={value}
      />
      <label
        className="absolute left-4  -top-3.5 text-gray-600 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-3.5 peer-focus:text-accent peer-focus:text-sm"
        htmlFor={name}
      >
        {label}
      </label>
    </div>
  );
};

export default InputForm;
