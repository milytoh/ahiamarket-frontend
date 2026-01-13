import react from "react";

import { useApi } from "@/hooks/useApi";

import OtpInput from "./OtpInput";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { otpSchema, OtpFormData } from "@/utils/schemas/registrationSchema";

interface OtpData {
  onCloseOtForm: () => void;
}

interface RegisterResponse {
  success: boolean;
  message: string;
}

interface OtpDataPlayload {
  email: string;
  otp: string;
}

const OtpForm: react.FC<OtpData> = ({ onCloseOtForm }) => {
  //using custom hook
  const { post, loading, error } = useApi<OtpDataPlayload, RegisterResponse>(
    "http://localhost:3000/api/account/email/verify"
  );

  // handling form and validation with Form hook and zod
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    reset,
  } = useForm<OtpFormData>({
    resolver: zodResolver(otpSchema),
    // mode: "onChange",
    // reValidateMode: "onChange",
  });

  const onSubmit = async (data: any) => {
    console.log("check...");
    const otpDataArr = Object.values(data);
    const otpData = otpDataArr.toString();

    console.log(otpData);

    const response = await post({
      email: "milytohgold@gmail.com",
      otp: otpData,
    });

    console.log(response);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
        className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center p-4 "
        id="otp-modal"
      >
        <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-lg p-8 max-w-sm w-full text-center">
          <h2 className="text-2xl font-bold mb-4 text-text-light dark:text-text-dark">
            Verify Your Email
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            We've sent a One-Time Password to your email. Please enter it below.
          </p>
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
          <div className="flex justify-center gap-1 mb-6 px-6">
            <OtpInput {...register("input1")} />
            <OtpInput {...register("input2")} />
            <OtpInput {...register("input3")} />
            <OtpInput {...register("input4")} />
            <OtpInput {...register("input5")} />
            <OtpInput {...register("input6")} />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white font-bold py-3 px-4 rounded-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-background-dark transition duration-300 ease-in-out"
          >
            Verify
          </button>
          <button
            className="mt-4 text-sm text-gray-500 dark:text-gray-400 hover:underline"
            id="close-modal"
            onClick={onCloseOtForm}
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export default OtpForm;
