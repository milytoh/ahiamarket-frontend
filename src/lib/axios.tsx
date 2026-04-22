import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // or process.env
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
// api.interceptors.request.use(
//   config => {
//     const token = localStorage.getItem("token");

//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }

//     return config;
//   },
//   error => Promise.reject(error)
// );

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  // IMPORTANT: let FormData auto-set headers
  if (config.data instanceof FormData) {
    delete config.headers["Content-Type"];
  }

  return config;
});

//  Response interceptor
api.interceptors.response.use(
  response => response,
  error => {
    // auto logout when token expire
     if (error.response?.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    // Just pass the whole error through
    return Promise.reject(error);
  }

);

export default api;
