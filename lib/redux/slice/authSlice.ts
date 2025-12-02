// store/auth/authSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loadUserThunk } from "@/lib/thunkApis/authThunks";

interface AuthState {
  isLogged: boolean;
  user: any;
  hasRefreshToken: boolean;
  sessionExpired: boolean;
}

const initialState: AuthState = {
  isLogged: false,
  user: null,
  hasRefreshToken: false,
  sessionExpired: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.isLogged = false;
      state.user = null;
      state.hasRefreshToken = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadUserThunk.fulfilled, (state, action) => {
      const { user, isLogged, hasRefreshToken, expired } = action.payload;

      state.hasRefreshToken = hasRefreshToken;

      if (expired) {
        state.sessionExpired = true;
        state.isLogged = false;
        state.user = null;
        return;
      }

      state.isLogged = isLogged;
      state.user = user;
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
