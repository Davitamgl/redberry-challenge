import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  validUser: false
 
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setValidUser: (state, action) => {
      state.validUser = action.payload;
    }

  }
});

export const {setValidUser} =
  userSlice.actions;

export const isUserValid = (state) => state.user.validUser;



export default userSlice.reducer;
