import { createSlice } from "@reduxjs/toolkit";
import type { AuthState, User } from "./authTypes";
import { loginUser } from "./authThunk";




const initialState: AuthState = {
  user:null,
  token: null,
  loading: false,
  error: null,
  isAuthenticated: false
};


const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
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
        state.isAuthenticated = true
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? null;
      });
  },
});


export const {  logout } =
  authSlice.actions;

export default authSlice.reducer;
