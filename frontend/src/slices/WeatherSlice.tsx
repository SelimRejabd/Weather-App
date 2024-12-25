import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { TemperatureState } from '../interfaces/WeatherInterface';

const initialState: TemperatureState = {
  temperature: '',
  unit: '',
  timestamp: '',
  loading: false,
  error: null,
};

export const fetchTemperature = createAsyncThunk(
  'temperature/fetchTemperature',
  async () => {
    const response = await axios.get('http://localhost:5000/api/v1/temperature');
    return response.data.data;
  }
);

const weatherSlice = createSlice({
  name: 'weather',
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
        state.temperature = action.payload.temperature;
        state.unit = action.payload.unit;
        state.timestamp = action.payload.timestamp;
      })
      .addCase(fetchTemperature.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch data';
      });
  },
});

export default weatherSlice.reducer;
