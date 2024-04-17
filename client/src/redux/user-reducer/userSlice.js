import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  usersInfo: [],
};

export const usersInfoSlice = createSlice({
  name: 'usersInfo',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      // Replaces the existing users array with the new one
      state.usersInfo = action.payload;
    },
    addUser: (state, action) => {
      // Adds a single user to the users array
      state.usersInfo.push(action.payload);
    },
  },
});

export const { setUsers, addUser } = usersInfoSlice.actions;

export default usersInfoSlice.reducer;

