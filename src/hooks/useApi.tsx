import { useState } from "react";
import axios, { AxiosRequestConfig, AxiosError } from "axios";
import api from "@/lib/axios";

export interface ApiError {
  message: string;
  errors?: { field: string; message: string }[];
}

export function useApi<TBody = any, TResponse = any>(url: string) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);



  const post = async (body?: TBody, config?: AxiosRequestConfig) => {
  setLoading(true);
  setError(null);

  try {
    const res = await api.post<TResponse>(url, body, config);

    console.log(res, "ggg")
    return res.data;
  } catch (err: any) {
    
    // Axios error
    if (err.response?.data) {
    // This ensures TypeScript knows this is an AxiosError
    const apiError = {
      message: err.response?.data?.message || "Request failed",
      errors: err.response?.data?.errors || null,
    };

      setError(apiError);
      throw apiError; 
    }

    // Network / unexpected error
    const fallbackError: ApiError = {
      message: "something went wrong. Please try again.",
    };

    setError(fallbackError);
    throw fallbackError;
  } finally {
    setLoading(false);
    console.log(error)
  }
};

  return { post, loading, error };
}
