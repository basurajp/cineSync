import { createSlice } from "@reduxjs/toolkit";

const wallpaperSlice = createSlice({
  name: "wallpper",
  initialState: {
    walllpaper: null,
  },
  reducers: {
    addWallPaperdata: (state, action) => {
      state.walllpaper = action.payload;
    },
  },
});


export const {addWallPaperdata} = wallpaperSlice.actions
export default wallpaperSlice.reducer