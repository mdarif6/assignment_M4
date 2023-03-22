import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  albumsData: [],
  usersData: [],
  photosData: [],
  albumitem: {},
};

export const albumSlice = createSlice({
  name: "album",
  initialState: initialState,
  reducers: {
    albumSetData: (state, action) => {
      return { ...state, albumsData: action.payload };
    },
    setUsersData: (state, action) => {
      return { ...state, usersData: action.payload };
    },
    setPhotosData: (state, action) => {
      return { ...state, photosData: action.payload };
    },
    setalbumItem: (state, action) => {
      return { ...state, albumitem: action.payload };
    },
  },
});

export const { albumSetData, setUsersData, setPhotosData, setalbumItem } =
  albumSlice.actions;

export default albumSlice.reducer;
