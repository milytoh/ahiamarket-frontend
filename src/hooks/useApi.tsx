import { useState } from "react";
import { AxiosRequestConfig } from "axios";
import api from "@/lib/axios";

export function useApi<TBody = any, TResponse = any>(url: string) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const post = async (body?: TBody, config?: AxiosRequestConfig) => {
    setLoading(true);
    setError(null);
    try {
      
      const res = await api.post<TResponse>(url, body, config);
      console.log("dddddd", res)
      
    } catch (err: any) {
      
      setError(err || "Something went wrong");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { post, loading, error };
}
