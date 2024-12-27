/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const base_url = import.meta.env.REACT_APP_BASE_URL;

interface UserState {
  user: null | { name: string; email: string };
  error: string | null;
  loading: boolean;
  success: boolean;
  message: string;
}

const initialState: UserState = {
  user: null,
  error: null,
  loading: false,
  success: false,
  message: "",
};

export const registerUser = createAsyncThunk(
  "user/register",
  async (
    userData: { name: string; email: string; password: string },
    thunkAPI
  ) => {
    try {
      const response = await axios.post(`${base_url}/users/create`, userData);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response.data.message || "Failed to register"
      );
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/login",
  async (userData: { email: string; password: string }, thunkAPI) => {
    try {
      const response = await axios.post(`${base_url}/auth/login`, userData);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response.data.message || "Failed to login"
      );
    }
  }
);

export const logoutUser = createAsyncThunk(
  "user/logoutUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${base_url}/auth/logout`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.message = action?.payload?.message;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = null;
        state.success = action?.payload?.success;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.error = state.error = action.payload as string;
      });
  },
});
export default userSlice.reducer;
