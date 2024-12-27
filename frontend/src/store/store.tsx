import { configureStore } from "@reduxjs/toolkit";
import WeatherReducer from "../slices/WeatherSlice";
import UserReducer from "../slices/UserSlice";

const store = configureStore({
  reducer: {
    weather: WeatherReducer,
    user: UserReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
