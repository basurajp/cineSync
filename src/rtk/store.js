import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import wallpperReducer from './wallpaperSlice'

export const store = configureStore({
  reducer: {
    search: searchReducer,
    wallpaper:wallpperReducer
  },
});
