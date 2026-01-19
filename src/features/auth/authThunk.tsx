import { createAsyncThunk } from "@reduxjs/toolkit";

import type { LoginPayload } from "./authTypes";

export const loginUser = createAsyncThunk(
  "auth/login",
  async (data: LoginPayload, { rejectWithValue }) => {
    try {
      const response = await authService.login(data);
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || "Login failed");
    }
  },
);
