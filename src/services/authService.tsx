import api from "@/lib/axios";

export interface LoginPayload {
  email: string;
  password: string;
}

export const authService = {
  login: async (data: LoginPayload) => {
    const res = await api.post("http://localhost:3000/api/account/login", data);
    return res.data;
  },

//   verifyOtp: async (data: { email: string; otp: string }) => {
//     const res = await api.post("/auth/verify-otp", data);
//     return res.data;
//   },
};
