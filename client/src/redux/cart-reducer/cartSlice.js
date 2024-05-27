import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

export const cartItemsSlice = createSlice({
  name: 'cartItems',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { product_id } = action.payload;
      const existingItem = state.cartItems.find(item => item.product_id === product_id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push(action.payload);
      }
    },
      removeItem: (state, action) => {
      const indexToRemove = state.cartItems.findIndex(item => item.product_id === action.payload.product_id);
      if (indexToRemove !== -1) {
        state.cartItems.splice(indexToRemove, 1);
      }
    },
    increment: (state, action) => {
      const { product_id } = action.payload;
      const existingItem = state.cartItems.find(item => item.product_id === product_id);
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.amount = existingItem.price * existingItem.quantity;
      }
    },
    decrement: (state, action) => {
      const { product_id } = action.payload;
      const existingItem = state.cartItems.find(item => item.product_id === product_id);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
         existingItem.amount = existingItem.price * existingItem.quantity;
      }
    },
    setCartItems:(state) =>{
      state.cartItems = [];
    },
  },
});

export const { addItem, removeItem, increment, decrement, setCartItems } = cartItemsSlice.actions;
export default cartItemsSlice.reducer;
