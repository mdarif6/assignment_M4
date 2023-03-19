import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  albumsData: [],
};

export const albumSlice = createSlice({
  name: "album",
  initialState: initialState,
  reducers: {
    albumSetData: (state, action) => {
      return { ...state, albumsData: action.payload };
    },
  },
});

export const { albumSetData } = albumSlice.actions;

export default albumSlice.reducer;
