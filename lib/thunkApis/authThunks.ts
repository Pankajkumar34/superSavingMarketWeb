// store/auth/authThunks.ts
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getMe } from "@/utils/server/authRefreshToken";

export const loadUserThunk = createAsyncThunk(
  "auth/loadUser",
  async () => {
    const hasRefreshToken = document.cookie.includes("refreshToken");

    if (!hasRefreshToken) {
      return {
        isLogged: false,
        user: null,
        hasRefreshToken: false,
        expired: false,
      };
    }

    const me = await getMe();

    return {
      isLogged: me.loggedIn,
      user: me.user || null,
      hasRefreshToken: true,
      expired: me.expired || false,
    };
  }
);
