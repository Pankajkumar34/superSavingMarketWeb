// store/auth/authThunks.ts
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getMe } from "@/utils/server/authRefreshToken";
import axiosInstanceConfig from "@/utils/axios.config";
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
  },

);

export const fileUploadThunk = createAsyncThunk("type/uploadFile", async (formPayload: any, { rejectWithValue }) => {
  try {

    const response = await axiosInstanceConfig.post(`/upload?destination=${formPayload.destination}`, formPayload.formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
    return response.data;

  } catch (error) {
    return rejectWithValue(
      error?.response?.data?.erroror ||
      error?.response?.data?.message ||
      error.message ||
      "File upload failed"
    )
  }
})

export const getProfile= createAsyncThunk("auth/getProfile", async (_, {rejectWithValue}) => {

  try {
    const res = await axiosInstanceConfig.get("/auth/profile");
    return res.data?.body;
  }
  catch (err: any) {
    return rejectWithValue(err.response?.data);
  }
});
export const logoutThunk = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      const res = await axiosInstanceConfig.post("/auth/logout");
      console.log(res, "==>")
      return res.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response?.data);
    }
  }
);
