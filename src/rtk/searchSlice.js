import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    seachResult: [],
  },
  reducers: {
    addSearchResultData: (state, action) => {
      state.seachResult = action.payload;
    },
  },
});

export const { addSearchResultData } = searchSlice.actions;

export default searchSlice.reducer;
