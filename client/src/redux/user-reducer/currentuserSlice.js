import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [{
        name: '',  // directly use user.name here
        email: '',
        password: '',
        signIn: false}], 
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      // Directly set the currentUser to the action's payload assuming it is an object
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
