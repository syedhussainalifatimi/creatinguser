import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ourproducts: [],
};

export const ourproductsSlice = createSlice({
  name: 'ourproducts',
  initialState,
  reducers: {
    setOurproducts: (state, action) => {
      // Replaces the existing users array with the new one
      state.ourproducts = action.payload;
    },
  },
});

export const { setOurproducts } = ourproductsSlice.actions;

export default ourproductsSlice.reducer;