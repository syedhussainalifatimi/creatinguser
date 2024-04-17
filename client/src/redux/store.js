import { configureStore } from '@reduxjs/toolkit';
import usersInfoReducer from './user-reducer/userSlice'; // Ensure the path matches your project structure
import userReducer from './user-reducer/currentuserSlice' // Fixed the missing quote and path

export const store = configureStore({
  reducer: {
    usersInfo: usersInfoReducer, // Added comma to separate entries
    user: userReducer,
  },
});

