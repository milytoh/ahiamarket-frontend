import { createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "@/services/authService";
import type { LoginPayload, User, ApiError } from "./authTypes";



export const loginUser = createAsyncThunk<
  User, // return type
  LoginPayload, // argument type
  { rejectValue: ApiError } 
>("auth/login", async (payload, thunkAPI) => {
  try {
    return await authService.login(payload);
  } catch (err: any) {
    return thunkAPI.rejectWithValue({
      message: err?.response?.data?.message || "Login failed",
      errors: err?.response?.data?.errors,
    });
  }
});
