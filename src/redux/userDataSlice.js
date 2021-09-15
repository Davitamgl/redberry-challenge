import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  validatedData: {
    validFirstName: "",
    validLastName: "",
    validEmail: "",
  },

  validUser: false,
};

export const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setIsValidUser: (state, action) => {
      state.validUser = action.payload;
    },
    setValidationData: (state, action) => {
      if (action.payload === false ) {
        state.validatedData.validFirstName = "";
        state.validatedData.validLastName = "";
        state.validatedData.validEmail = "";
      } else {
        state.validatedData.validFirstName = action.payload.firstName;
        state.validatedData.validLastName = action.payload.lastName;
        state.validatedData.validEmail = action.payload.email;
      }
    },
  },
});

export const { setIsValidUser, setValidationData } = userDataSlice.actions;

export const getIsUserValid = (state) => state.userData.validUser;
export const getValidationData = (state) => state.userData.validatedData;

export default userDataSlice.reducer;
