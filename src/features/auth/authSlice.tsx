import { createSlice } from "@reduxjs/toolkit";
import type { AuthState, User } from "./authTypes";
import { loginUser } from "./authThunk";

/// hydrated logic
const token = localStorage.getItem("token");
const expiry = localStorage.getItem("token_expiry");

const EXPIRY_TIME = 6 * 60 * 60 * 1000;

const isTokenValid = token && expiry && Date.now() < Number(expiry);

const initialState: AuthState = {
  user: null,
  token: token,
  loading: false,
  error: null,
  isAuthenticated: !!isTokenValid,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("token");
      state.token = null;
      state.isAuthenticated = false;
      state.loading = false;
    },
    setCredentials: (state, action) => {
      state.token = action.payload.token;
      state.isAuthenticated = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.token = action.payload.token;
        state.isAuthenticated = true;
         
          const expiry = Date.now() + EXPIRY_TIME;

        localStorage.setItem("token", action.payload.token);
         localStorage.setItem("token_expiry", expiry.toString());
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? null;
      });
  },
});

export const { logout, setCredentials } = authSlice.actions;

export default authSlice.reducer;
