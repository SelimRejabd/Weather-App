import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TemperatureState } from "../interfaces/WeatherInterface";

const base_url = import.meta.env.REACT_APP_BASE_URL;

const initialState: TemperatureState = {
  temperature: "",
  unit: "",
  timestamp: "",
  loading: true,
  error: null,
};
export const fetchTemperature = createAsyncThunk(
  "temperature/fetchTemperature",
  async () => {
    const response = await axios.get(`${base_url}/temperature`);
    return response.data;
  }
);
const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemperature.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTemperature.fulfilled, (state, action) => {
        state.loading = false;
        state.temperature = action?.payload?.data?.temperature;
        state.unit = action?.payload?.data?.unit;
        state.timestamp = action?.payload?.data?.timestamp;
      })
      .addCase(fetchTemperature.rejected, (state, action) => {
        state.loading = false;
        state.error = action?.error?.message || "Failed to fetch data";
      });
  },
});

export default weatherSlice.reducer;
