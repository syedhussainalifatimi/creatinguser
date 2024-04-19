import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hotproducts: [],
};

export const hotproductsSlice = createSlice({
  name: 'hotproducts',
  initialState,
  reducers: {
    setHotproducts: (state, action) => {
      // Replaces the existing users array with the new one
      state.hotproducts = action.payload;
    },
  },
});

export const { setHotproducts } = hotproductsSlice.actions;

export default hotproductsSlice.reducer;
