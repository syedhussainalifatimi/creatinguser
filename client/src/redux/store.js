import { configureStore } from '@reduxjs/toolkit';
import usersInfoReducer from './user-reducer/userSlice'; // Ensure the path matches your project structure
import userReducer from './user-reducer/currentuserSlice' // Fixed the missing quote and path
import hotproductsReducer from './hotproducts-reducer/hotproductsSlice';
import ourproductsReducer from './ourproducts-reducer/ourproductsSlice';
import cartSliceReducer from './cart-reducer/cartSlice';

export const store = configureStore({
  reducer: {
    usersInfo: usersInfoReducer, // Added comma to separate entries
    user: userReducer,
    hotproducts: hotproductsReducer,
    ourproducts: ourproductsReducer,
    cartItems: cartSliceReducer,
  },
});

