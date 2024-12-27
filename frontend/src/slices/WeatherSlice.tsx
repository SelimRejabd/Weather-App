/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TemperatureState } from "../interfaces/WeatherInterface";
import { RootState } from "../store/store";

const base_url = import.meta.env.REACT_APP_BASE_URL;

const initialState: TemperatureState = {
  temperature: "",
  unit: "",
  timestamp: "",
  loading: true,
  error: null,
};
// export const fetchTemperature = createAsyncThunk(
//   "temperature/fetchTemperature",
//   async () => {
//     try {
//       const response = await axios.get(
//         `${base_url}/weather/temperature-without-auth`
//       );
//       return response.data;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );

export const fetchTemperature = createAsyncThunk(
  "temperature/fetchTemperature",
  async (_, { getState, rejectWithValue }) => {
    try {
      const { token } = (getState() as RootState).user;
      console.log("Token:", token);
      document.cookie = `token=${token}; path=/`;
      const response = await axios.get(`${base_url}/weather/temperature`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error: any) {
      console.error("Error fetching temperature:", error);

      if (error.response) {
        return rejectWithValue(error.response.data.message || "Server error");
      } else if (error.request) {
        return rejectWithValue(
          "No response from server. Please try again later."
        );
      } else {
        return rejectWithValue(error.message || "An unknown error occurred");
      }
    }
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemperature.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTemperature.fulfilled, (state, action) => {
        state.temperature = action?.payload?.data?.temperature;
        state.unit = action?.payload?.data?.unit;
        state.timestamp = action?.payload?.data?.timestamp;
        state.loading = false;
      })
      .addCase(fetchTemperature.rejected, (state, action) => {
        state.loading = false;
        state.error = (action?.payload as string) || "Failed to fetch data";
      });
  },
});

export const { clearError } = weatherSlice.actions;

export default weatherSlice.reducer;
