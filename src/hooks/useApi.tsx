import { useState } from "react";
import axios, { AxiosRequestConfig, AxiosError } from "axios";
import api from "@/lib/axios";

export interface ApiError {
  message: string;
  errors?: { field: string; message: string }[];
}

export function useApi<TBody = any, TResponse = any>(url: string) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ApiError | null>(null);



  const post = async (body?: TBody, config?: AxiosRequestConfig) => {
  setLoading(true);
  setError(null);

  try {
    const res = await api.post<TResponse>(url, body, config);

    
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
    
    }
    

  };
  

  // for patch request
  const patch = async (
    body: TBody,
    config?: AxiosRequestConfig,
  ): Promise<TResponse> => {
    setLoading(true);
    setError(null);

    try {
      const res = await api.patch<TResponse>(url, body, config);
      return res.data;
    } catch (err:any) {
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
    }
  };


  // for get request
  
  const put = async (
    body: TBody,
    config?: AxiosRequestConfig,
  ): Promise<TResponse> => {
    setLoading(true);
    setError(null);

    try {
      const res = await api.put<TResponse>(url, body, config);
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
    }
  };

  // for get request
    const get = async (config?: AxiosRequestConfig): Promise<TResponse> => {
      setLoading(true);
      setError(null);

      try {
        const res = await api.get<TResponse>(url, config);
        return res.data;
      } catch (err:any) {
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
      }
  };
  
 //delete request
  const del = async (config?: AxiosRequestConfig): Promise<TResponse> => {
    setLoading(true);
    setError(null);

    try {
      const res = await api.delete<TResponse>(url, config);
      return res.data;
    } catch (err:any) {
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
    }
  };

  //delete with body
  const delWithBody = async (
    body: TBody,
    config?: AxiosRequestConfig,
  ): Promise<TResponse> => {
    setLoading(true);
    setError(null);

    try {
      const res = await api.delete<TResponse>(url, {
        ...config,
        data: body, // 👈 Axios DELETE body rule
      });
      return res.data;
    } catch (err:any) {
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
    }
  };




  return { post, put, get, patch, del, delWithBody, loading, error };
}
